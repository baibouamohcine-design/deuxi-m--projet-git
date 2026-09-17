const prompt = require('prompt-sync')();
const km = Number(prompt( "Entré la vitesse en kilomètres par heure (km/h): "));
let m = km * 0.27778;
console.log(" la vitesse en kilomètres par heure (km/h) et la transforme en mètres par seconde (m/s)est : ", m );
