const pessoa = { nome: 'Joao' };
pessoa.nome = 'Pedro';

console.log(pessoa);

//pessoa = { nome: 'Rfa' };

Object.freeze(pessoa);

pessoa.nome = 'teste';

console.log(pessoa);

const pessoaConstante = Object.freeze({ Carro: 'Gol' });
