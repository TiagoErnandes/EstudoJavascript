const pessoa = {
  nome: 'Tiago',
  sobrenome: 'Ernandes',
  telefone: '85877854',
  peso: 87

}


for (atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`);

}