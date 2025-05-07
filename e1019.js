var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines[0]);
let horas, min, seg = 0;

horas = parseInt(n/3600);
min = parseInt((n % 3600) / 60);
seg = n % 60;

console.log(horas + ":" + min + ":" + seg);
