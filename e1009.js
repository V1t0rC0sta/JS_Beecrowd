var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome = (lines[0]).toString();
var fixo = Number(lines[1]);
var extra = Number(lines[2]);

var salario = (fixo + (extra * 0.15)).toFixed(2);

console.log("TOTAL = R$ "+ salario);
