const numeros = [2, 3, 6, 4, 10, 5, 7];
let novoArrayNumeros = [];

/*for (let i = 0; i < numeros.length; i++) {
  novoArrayNumeros.push(numeros[i] * 2);
}
console.log(novoArrayNumeros);*/
//Utilizando o Map;

let novoArrayNumerosMap = numeros.map(e => e * 2);
//console.log(novoArrayNumerosMap);

//Filter retorna o valor Bolean;

let mult2 = [];
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    mult2.push(numeros[i]);
  }
}
console.log(mult2);

const numerosFiltrados = numeros.filter(e => e % 2 == 0);
console.log(numerosFiltrados);

const arrayMapFilter = numeros
  .filter(e => e % 2 == 0)
  .map(e => e * 2);
console.log(arrayMapFilter);