let input = require('fs').readFileSync('/dev/stdin', 'utf8');
let lines = input.split('\n');

// Variáveis
let pi = Number(3.14159);
let raio = parseFloat(lines.shift());

// Calculo da área
let area = Math.pow(raio,2) * pi;

//Saída
console.log( "A=" + area.toFixed(4));
