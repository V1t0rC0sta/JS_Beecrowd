var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let linha1 = lines.shift().split(" ");
let linha2 = lines.shift().split(" ");

let iD1 = linha1.shift();
let nP1 = linha1.shift();
let preco1 = linha1.shift();

let iD2 = linha2.shift();
let nP2 = linha2.shift();
let preco2 = linha2.shift();

let calculoTotal = (nP1 * preco1) + (nP2 * preco2);

console.log("VALOR A PAGAR: R$ " + calculoTotal.toFixed(2));
