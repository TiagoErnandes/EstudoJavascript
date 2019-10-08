const soma = function (num1, num2) {
  return num1 + num2;
}

const imprimirResultados = function (num1, num2, operacao = soma) {
  console.log(operacao(num1, num2));
}

imprimirResultados(9, 11);

imprimirResultados(55, 5, (x, b) => {
  return x - b;
})

const pessoa = {
  falar() {
    console.log('Hello, Falei')
  }
}

pessoa.falar();