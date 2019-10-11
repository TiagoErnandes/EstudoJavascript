const sequencia = {
  _valor: 1,
  get valor() {
    return this._valor++;
  },
  set valor(valor) {

    if (valor > this._valor) {
      return this._valor = valor;
    } else {
      return console.log("Valor invalido");
    }

  }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000;
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 500;
console.log(sequencia.valor, sequencia.valor);

