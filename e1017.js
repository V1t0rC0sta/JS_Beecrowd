var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let tempo = parseInt(lines[0]);
let velMedia = parseInt(lines[1]);
let consumoKmL = 12;

// Calculo da Distancia Percorrida
let distancia = tempo * velMedia;

// Calculo de Litros Gastos
let resposta = (distancia/consumoKmL);

console.log(resposta.toFixed(3));
