function soma(num1, num2) {
  return num1 + num2;
}

const valor = soma(10, 40);
console.log(valor);


function somaArray(num) {
  let soma = 0;
  for (let i of num) {
    soma += i;
  }
  return soma;
}

let valores = [1, 2, 3, 4];
let somaDeValores = somaArray(valores);
console.log(somaDeValores);

function escreverEndereco(rua, cidade, pais, ...complementos) {


  console.log(rua);
  console.log(cidade);
  console.log(pais);
  console.log(complementos);
}

escreverEndereco('itauna ', 'Sabará', 'Canada', 'com1', 'comp2', 'Bob')

function autoExecutavel() {
  console.log('Executei');
}

let subtrairDoisNumeros = function (a, b) {
  return a - b;
}

console.log(subtrairDoisNumeros(10, 4));

// Função anonima = função sem nome que pode ser atribuida em uma varialvel;

function somaCallBack(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}

//const somaCall = somaCallBack(4, 5)(1);
const somaCallVar = somaCallBack(10, 15);
somaCallVar(25);

function somaCallBackMulti(num1, num2, funcMulti) {
  return funcMulti(num1 + num2);
}
let multi = function (total) {
  return total * 2;
}

console.log(somaCallBackMulti(10, 5, multi));









