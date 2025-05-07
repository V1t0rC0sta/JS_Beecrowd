var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var id = Number(lines[0]);
var ch = Number(lines[1]);
var ht = Number(lines[2]);

var salario = (ch * ht); 

console.log("NUMBER = " + id);
console.log("SALARY = U$ " + salario.toFixed(2));
