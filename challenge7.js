const prompt = require('prompt-sync')();
const  n1 = Number(prompt('Entré the first number : ' ))
const  n2 = Number(prompt('Entré the second number : ' ))
const  n3 = Number(prompt('Entré the theard number : ' ))

const a = n1 * 2
const b = n2 * 3
const c = n3 * 5 
console.log("la moyenne pondérée de trois nombres donnés par l'utilisateur avec les pondérations est : ", a+b+c /10 );