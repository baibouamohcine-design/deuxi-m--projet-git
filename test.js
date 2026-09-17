const prompt = require('prompt-sync')();
const firstName = prompt('what is your name ? ');
const lastName = prompt ('what is your last name ? ');
const age = prompt('how old are you ? ');
const gender = prompt('what is your gender ? ');
const email = prompt('Enter your adress email : ');
console.log('Helo', firstName, lastName , 'your age is', age , 'years old and your gender is ', gender ,'and finally your email adress is ',email);

