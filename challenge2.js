const prompt = require('prompt-sync')();
const c = prompt('Entré la température en Celsius : ');
let k = c + 273.15 ;
console.log('La température en Celsius et la transforme en Kelvin est :' , k);
 