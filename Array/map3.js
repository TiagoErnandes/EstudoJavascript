Array.prototype.map2 = function (callback) {
  let valor = [];
  for (let i = 0; i < this.length; i++) {
    valor.push(callback(this[i], i, this));
  }
  return valor;
}

const carrinho = [
  '{ "nome":"Borracha","preco": 3.45}',
  '{"nome":"Caderno","preco":13.98}',
  '{"nome":"Kit de Lapis","preco":41.22}',
  '{"nome":"Caneta","preco":7.50}'

]

//Retorna um array com os precos
const paraObjeto = json => JSON.parse(json)
const returnPrice = produto => produto.preco;
console.log(carrinho.map2(paraObjeto).map2(returnPrice));
