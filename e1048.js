const lines = ["2000.00"];

const salarioAtual = Number(lines[0]);
const tabelaReajuste = [15,12,10,7,4];
let novoSalario = 0, reajustePercentual = 0, reajuste = 0;

switch(true){
    case (salarioAtual>0 && salarioAtual <= 400.00):
        reajustePercentual = tabelaReajuste[0];
        break;
    case (salarioAtual>400.00 && salarioAtual <= 800.00):
        reajustePercentual = tabelaReajuste[1];
        break;
    case(salarioAtual>800.00 && salarioAtual <= 1200.00):
        reajustePercentual = tabelaReajuste[2];
        break;
    case(salarioAtual>1200.00 && salarioAtual <= 2000.00):
        reajustePercentual = tabelaReajuste[3];
        break;
    case(salarioAtual>2000.00):
        reajustePercentual = tabelaReajuste[4];
        break;
}

//Função para calcular o novo salário:
function calculaAumento (salarioAtual,reajustePercentual){
    return salarioAtual + salarioAtual * (reajustePercentual/100);
}  
//Função para calcular a diferença entre salário novo e salário atual:
function reajusteGanho (novoSalario,salarioAtual){
    return novoSalario - salarioAtual;
}


novoSalario = calculaAumento (salarioAtual,reajustePercentual);
reajuste = reajusteGanho(novoSalario,salarioAtual);


console.log(`Novo salario: ${novoSalario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${reajustePercentual} %`)
