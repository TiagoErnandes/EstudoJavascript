const pessoa = {
  nome: 'ana',
  idade: 27,
  endereco: {
    rua: 'Rua ABC',
    numero: 4545
  }
}

const { nome, idade } = pessoa;
console.log(pessoa);

const { nome: n, idade: i } = pessoa;

console.log(n);

const { sobrenomem = true, bemHumorado } = pessoa;
console.log(sobrenomem);


const { endereco: { rua, numero, cep } } = pessoa;
console.log(rua, numero, cep);

