var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [a,b,c] = input.split(" ").map((item) => parseFloat(item));

let delta, r1, r2 = 0;

// calculo do delta
delta = Math.pow(b,2)-(4*a*c);

//calculo das raizas
    r1 = (-b + Math.sqrt(delta))/(2*a);
    r2 = (-b - Math.sqrt(delta))/(2*a);
//condição

if (delta < 0 || a === 0){
    console.log("Impossivel calcular");
}else{
    console.log("R1 = " + r1.toFixed(5));
    console.log("R2 = " + r2.toFixed(5));
}
