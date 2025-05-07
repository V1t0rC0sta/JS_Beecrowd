var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [a,b,c] = input.split(" ").map(item => parseFloat(item));


// area do triangulo retangulo - A x B
var areaTR = (a * c)/2;

// area circulo - raio = C
const pi = 3.14159;
var areaC = pi * Math.pow(c,2);

//area do trapezio - bases (A e B) , altura (C)
var areaTRAP = ((a+b) / 2) * c;


//area do quadrado - lado B
var areaQ = b * b;

//ara do retangulo - lados A e B
var areaR = a * b;

// SAÍDA
console.log("TRIANGULO: " + areaTR.toFixed(3));
console.log("CIRCULO: " + areaC.toFixed(3));
console.log("TRAPEZIO: " + areaTRAP.toFixed(3));
console.log("QUADRADO: " + areaQ.toFixed(3));
console.log("RETANGULO: " + areaR.toFixed(3));
