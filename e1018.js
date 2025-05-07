var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
let saidaInicial = n;

let nota100 = parseInt(n/100);
n = n % 100;

let nota50 = parseInt(n/50);
n = n % 50;

let nota20 = parseInt(n/20);
n = n % 20;

let nota10 = parseInt(n/10);
n = n % 10;

let nota5 = parseInt(n/5);
n = n % 5;

let nota2 = parseInt(n/2);
n = n % 2;

let nota1 =  parseInt(n/1);
n = n % 1;

console.log(saidaInicial);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");
