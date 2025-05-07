var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [x, y] = lines[0].split(" ").map((item) => parseFloat(item));

switch (true) {
    case (x > 0 && y > 0):
        console.log("Q1");
        break;
    case (x < 0 && y > 0):
        console.log("Q2");
        break;
    case (x < 0 && y < 0):
        console.log("Q3");
        break;
    case (x > 0 && y < 0):
        console.log("Q4");
        break;
    case (x === 0 && y === 0):
        console.log("Origem");
        break;
    case (x === 0):
        console.log("Eixo Y");
        break;
    case (y === 0):
        console.log("Eixo X");
        break;
}
