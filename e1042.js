var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [number1,number2,number3] = lines[0].split(" ").map((item) => parseFloat(item));
const entrada = [number1,number2,number3];
const lista = [number1,number2,number3];

lista.sort((a,b) => a - b);
console.log(lista[0]);
console.log(lista[1]);
console.log(lista[2]);
console.log();
console.log(entrada[0]);
console.log(entrada[1]);
console.log(entrada[2]);
