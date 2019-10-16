const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Pedro', nota: 9.8, bolsista: true },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: Todos os alunos são bolsistas?
//Desafio 2: Algum aluno é bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
const resultado = alunos.map(e => e.bolsista).reduce(todosBolsistas);
console.log(resultado);
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
const resultado2 = alunos.map(e => e.bolsista).reduce(algumBolsista);
console.log(resultado2);