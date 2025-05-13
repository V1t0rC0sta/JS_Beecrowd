var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.trim().split('\n');

const valorEntrada = Number(lines[0]);

function calculaImposto8() {
    return ((valorEntrada - 2000.00) * 0.08).toFixed(2);
}

function calculaImposto18() {
    return ((1000.00 * 0.08) + ((valorEntrada - 3000.00) * 0.18)).toFixed(2);
}

function calculaImposto28() {
    return ((1000.00 * 0.08) + (1500.00 * 0.18) + ((valorEntrada - 4500.00) * 0.28)).toFixed(2);
}

if (valorEntrada <= 2000.00) {
    console.log("Isento");
} else if (valorEntrada <= 3000.00) {
    console.log("R$ " + calculaImposto8());
} else if (valorEntrada <= 4500.00) {
    console.log("R$ " + calculaImposto18());
} else {
    console.log("R$ " + calculaImposto28());
}
