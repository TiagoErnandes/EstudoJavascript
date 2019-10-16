/*const numeros = [5, 9, 8, 7, 10]

const soma10 = e => e + 10;
const multiplica2 = e => e * 2;
const triplica = e => e * 3;
const paDinheiro = e => `RS ${parseFloat(e).toFixed(2).replace('.', ',')}`

console.log(numeros.map(multiplica2).map(soma10).map(triplica).map(paDinheiro));*/

const carrinho = [
  '{ "nome":"Borracha","preco": 3.45}',
  '{"nome":"Caderno","preco":13.98}',
  '{"nome":"Kit de Lapis","preco":41.22}',
  '{"nome":"Caneta","preco":7.50}'

]

//Retorna um array com os precos
const paraObjeto = json => JSON.parse(json)
const returnPrice = produto => produto.preco;
console.log(carrinho.map(paraObjeto).map(returnPrice));

