const prompt = require('prompt-sync')();
const c = Number(prompt("Entré la température en Celsius : "));
if (c < 0 ){
 console.log(" l'état de l'eau à cette température est : solide");
}else if (0 <= 0 && c < 100){
   console.log("l'état de l'eau à cette température est : liquide");
}else if (c >= 100){
console.log("l'état de l'eau à cette température est : Gaz");
};