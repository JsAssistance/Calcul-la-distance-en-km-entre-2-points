// Les coordonnées 1, 2 et 3
// 1 Paris près place Vendôme
// 2 Marseille
// 3 St Denis Basilique

// ATTENTION LE CALCUL EST REALISE SUR LA BASE D'UN CALCUL A VOL D'OISEAU DONC VOUS NE TROUVEREZ PAS LA MEME DONNEE SUR
// GOOGLE MAPS PAR CONTRE EN TAPPANT VOL DOISEAU EN PLUS DE LA LOCALISATION SUR GOOGLE VOUS TROUVEREZ LE RESULTAT 
// CORRESPONDANT

var la1 = 48.856614;
var ln1 = 2.352222;

var la2 = 43.296482;
var ln2 = 5.369780;

var la3 = 48.935459;
var ln3 = 2.359835;


// Fonction 1 - La Terre est ronde (si j'te jure)
function getDistanceFromLatLonInKm(lat1, lng1, lat2, lng2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lng2 - lng1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}


// Fonction 2 - La Terre est plate - Ou presque
function getDistanceWithPythagore(lat1, lng1, lat2, lng2) {
    /* 
          Calcul de la distance en km entre les latitudes 
          sachant que : 1° ~ 111,11km sur l'équateur
    */
    var dLat = (lat2 - lat1) * 111.11;

    /* Calcul de la distance en km entre les longitudes 
           1 Mode Terre ultra plate
       2 Ou plutôt Mode Terre plate pondéré par la latitude entre les 2 points
    */

    // 1 Mode Terre ultra plate 
    // var dLon = (lng2-lng1)*111.11; 

    // Ou plutôt Mode Terre plate pondéré par la latitude
    var dLon = (lng2 - lng1) * (111.11 * Math.cos((lat2 - lat1) / 2));

    return Math.sqrt(Math.pow(dLat, 2) + Math.pow(dLon, 2));

}


function deg2rad(deg) {
    return (deg * Math.PI) / 180
}

document.getElementById('distance').textContent = getDistanceFromLatLonInKm(la1, ln1, la2, ln2);
document.getElementById('distance2').textContent = getDistanceWithPythagore(la1, ln1, la2, ln2);

document.getElementById('distance3').textContent = getDistanceFromLatLonInKm(la1, ln1, la3, ln3);
document.getElementById('distance4').textContent = getDistanceWithPythagore(la1, ln1, la3, ln3);



