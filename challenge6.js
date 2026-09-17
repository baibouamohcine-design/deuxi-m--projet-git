const prompt = require('prompt-sync')();
const  n1 = Number(prompt('Entré the first number : ' ))
const  n2 = Number(prompt('Entré the second number : ' ))

const plus  = n1 + n2
const mince = n1 - n2
const divice = n1 / n2 
const multiple = n1 * n2 

console.log ("plus resultat : " , plus)
console.log ("mince resultat : " , mince )
console.log ("divice  resultat : " , divice )
console.log ("multiple   resultat : " , multiple )
