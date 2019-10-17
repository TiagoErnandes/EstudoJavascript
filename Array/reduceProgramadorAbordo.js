const numeros = [2, 3, 6, 5, 10];
const numerosSomaReduce = numeros.reduce(function (valorAcumulador, valorArray) {
  return valorAcumulador + valorArray;
}, 0);
//console.log(numerosSomaReduce);

const pessoas = [
  {
    nome: 'Tiago',
    idade: 27
  },
  {
    nome: 'João',
    idade: 14
  },
  {
    nome: 'Maria',
    idade: 23
  },
  {
    nome: 'Lucas',
    idade: 32
  },
  {
    nome: 'Mateus',
    idade: 15
  },
  {
    nome: 'Isa',
    idade: 23
  },
  {
    nome: 'Luisa',
    idade: 17
  }
];


const pessoasAgrupadas = pessoas.reduce(function (
  valorAcumulador, valorArray) {
  const propMaiorOuMenor = valorArray.idade >= 18 ? 'maiores' : 'menores';
  valorAcumulador[propMaiorOuMenor].push(valorArray);
  return valorAcumulador

}, { maiores: [], menores: [] })

console.log(pessoasAgrupadas);