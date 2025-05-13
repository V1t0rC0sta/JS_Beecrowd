var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(" ").map((item) => parseInt(item));

let tempoEmHoras = 0;
let tempoEmMinutos = 0;

// Cálculo total em minutos (mais simples e preciso)
let totalInicial = horaInicial * 60 + minutoInicial;
let totalFinal = horaFinal * 60 + minutoFinal;

// Se o tempo final é menor, significa que passou da meia-noite
if (totalFinal <= totalInicial) {
  totalFinal += 24 * 60;
}

let duracaoTotal = totalFinal - totalInicial;
tempoEmHoras = Math.floor(duracaoTotal / 60);
tempoEmMinutos = duracaoTotal % 60;

console.log(`O JOGO DUROU ${tempoEmHoras} HORA(S) E ${tempoEmMinutos} MINUTO(S)`);
