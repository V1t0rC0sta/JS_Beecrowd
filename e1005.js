var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var n1 = Number(lines[0])* 3.5;
var n2 = Number(lines[1])* 7.5;

var media = ((n1 + n2)/11).toFixed(5);

console.log("MEDIA = " + media);
