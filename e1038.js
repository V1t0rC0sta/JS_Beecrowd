var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Pegando o código e a quantidade da primeira linha
let [codigo, quantidade] = lines[0].split(" ").map((item) => parseFloat(item));

let preco = 0;

// Definindo o preço com base no código do produto
switch (true) {
  case (codigo === 1):
    preco = 4.00;
    break;
  case (codigo === 2):
    preco = 4.50;
    break;
  case (codigo === 3):
    preco = 5.00;
    break;
  case (codigo === 4):
    preco = 2.00;
    break;
  case (codigo === 5):
    preco = 1.50;
    break;
  default:
    preco = 0;
}

function valorPedido(preco, quantidade) {
    return preco * quantidade;
}

let conta = valorPedido(preco, quantidade);

console.log("Total: R$ " + conta.toFixed(2));
