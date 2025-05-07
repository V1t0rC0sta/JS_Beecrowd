var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = input.split(' ').map((item) => parseInt(item));

let maiorAB = ((a+b)+(Math.abs(a-b)))/2;

if (maiorAB > c){
    console.log(maiorAB + " eh o maior");
}else{
    console.log(c + " eh o maior");
}
