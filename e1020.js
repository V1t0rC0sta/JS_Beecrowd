var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let diasEntrada = parseInt(lines[0]);
let ano, mes, dias = 0;

//calculo dos anos
ano = parseInt(diasEntrada/365);
//calculo de meses
mes = parseInt((diasEntrada%365)/30);
//calculo de dias
dias = parseInt((diasEntrada%365)%30);
    
console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dias + " dia(s)");