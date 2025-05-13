var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [horaInicio,horaFim] = lines[0].split(" ").map((item)=>parseFloat(item));

let horaJogo = 0;

if (horaFim > horaInicio){
    horaJogo = horaFim - horaInicio;
}else if (horaInicio === horaFim){
    horaJogo = 24;
}else{
    horaJogo = (24 - horaInicio) + horaFim;
}

console.log(`O JOGO DUROU ${horaJogo} HORA(S)`);
