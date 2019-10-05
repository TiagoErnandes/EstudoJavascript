function getInteiroAleatorioEnter(min, max) {
  const valor = Math.random() * (max - min) + min;
  return Math.floor(valor)

}

let opcao = 0;

while (opcao != -1) {
  opcao = getInteiroAleatorioEnter(-1, 10);
  console.log(`Opção sorteadas foram : ${opcao}`);
}

console.log('Fim');