const funcionario = { nome: 'Carlos', salario: 15.000, idade: 28 };
const clone = { empregado: true, ...funcionario };
console.log(clone);


function tag(partes, ...valores) {
  console.log(partes);
  console.log(valores)
  return 'Outra String';
}

const aluno = 'Meire';
const situacao = 'Aprovado';

console.log(tag`${aluno} está ${situacao}.`);
