function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}
//console.log(criarPessoa());

function criarProdutos(nome, produto, preco) {
  const descont = preco - (preco * 0.1);

  return {
    nome: nome,
    produto: produto,
    preco: descont
  }
}

const prod1 = criarProdutos('Aymore', 'Biscoito', 1500);
console.log(prod1);