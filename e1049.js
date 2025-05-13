var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const tipo1 = lines[0];
const tipo2 = lines[1];
const tipo3 = lines[2];

if (tipo1 === "vertebrado"){
    if (tipo2 === "ave"){
        if(tipo3 === "carnivoro"){
            console.log("aguia");
        }else if(tipo3 === "onivoro"){
            console.log("pomba");
        }
    }else if(tipo2 === "mamifero"){
        if(tipo3 === "onivoro"){
            console.log("homem");
        }else if(tipo3 === "herbivoro"){
            console.log("vaca");
        }
    }
    
}else if(tipo1 === "invertebrado"){
    if (tipo2 === "inseto"){
        if(tipo3 === "hematofago"){
            console.log("pulga");
        }else if(tipo3 === "herbivoro"){
            console.log("lagarta");
        }
        
    }else if(tipo2 === "anelideo"){
        if(tipo3 === "hematofago"){
            console.log("sanguessuga");
        }else if(tipo3 === "onivoro"){
            console.log("minhoca");
        }
    }
}
