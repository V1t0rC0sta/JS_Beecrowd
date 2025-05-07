var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dist = parseFloat(lines[0]);
let combus = parseFloat(lines[1]);
let media = 0;

media = (dist/combus);

console.log(media.toFixed(3) + " km/l");
