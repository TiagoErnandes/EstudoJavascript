const alunos = [
  { nome: 'Joao', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: true }
]

/*const resultado = alunos.map(e => e.nota).reduce((acumulado, atual) => acumulado + atual, 15);
console.log(resultado);*/
const resultado = alunos.map(e => e.nota).reduce(function (acumulado, atual) {
  console.log(acumulado, atual);
  return acumulado + atual;
}, 15);
console.log(resultado);