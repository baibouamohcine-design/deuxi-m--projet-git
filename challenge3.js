const prompt = require('prompt-sync')();
const km = Number(prompt('Entré  la distance en kilomètres et la transforme en yards : '));
let y = km * 1093.61 ; 
console.log("La distance en km et la transforme en yards est : ",y);