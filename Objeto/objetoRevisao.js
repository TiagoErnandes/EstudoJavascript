const produto = new Object;
produto.nome = 'Cadeira'
produto['marca do prduto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto['marca do prduto'];
console.log(produto);

const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 30,
    endereco: {
      rua: 'Itauna',
      numero: 445
    }

  },
  condutores: [{
    nome: 'Pedro',
    idade: '18'
  }, {
    nome: 'Renata',
    idade: 20
  }], calcularValorSeguro() {
    //...
  }
}

carro.proprietario.endereco.numero = 2520;
console.log(carro);

