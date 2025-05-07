var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [n1,n2,n3,n4] = lines[0].split(" ").map((item)=>parseFloat(item));
let notaExame = parseFloat(lines[1]);

function calculoMedia (n1,n2,n3,n4){
    let media = (n1*2 + n2*3 + n3*4 + n4*1)/10;
    return media;
}

function calculoMediaExame(mediaFinal,notaExame){
    return (mediaFinal+notaExame)/2;
}


let mediaFinal = calculoMedia(n1,n2,n3,n4);
let mediaComExame = calculoMediaExame(mediaFinal,notaExame);


switch(true){
    case (mediaFinal >= 7):
        console.log("Media: " + mediaFinal.toFixed(1));
        console.log("Aluno aprovado.");
        break;
    case (mediaFinal < 5):
        console.log("Media: " + mediaFinal.toFixed(1));
        console.log("Aluno reprovado.");
        break;
    case (mediaFinal >= 5 && mediaFinal <7):
        console.log("Media: " + mediaFinal.toFixed(1));
        console.log("Aluno em exame.");
        console.log("Nota do exame: " + notaExame.toFixed(1));
        if (mediaComExame >= 5){
           console.log("Aluno aprovado."); 
        }else{
            console.log("Aluno reprovado."); 
        }
        console.log("Media final: " + mediaComExame.toFixed(1));
        break;
}
