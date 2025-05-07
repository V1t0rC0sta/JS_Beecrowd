var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines[0]);

let tempo = distancia * 2;
console.log(tempo + " minutos");
