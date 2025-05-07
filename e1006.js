var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = Number(lines[0])*2;
var n2 = Number(lines[1])*3;
var n3 = Number(lines[2])*5;

var media = ((n1 + n2 + n3)/10).toFixed(1)

console.log("MEDIA = " + media);
