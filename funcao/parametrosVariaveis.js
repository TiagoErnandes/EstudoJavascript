function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

console.log(soma(1, 5, 4, 'Tiago', [6, 4, 15, 8]));