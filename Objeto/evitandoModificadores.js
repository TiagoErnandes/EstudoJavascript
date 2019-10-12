const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: '55',
  tag: 'Promocao'
})
console.log('Teste de extensivo: ', Object.isExtensible(produto));

produto.nome = 'Roberta';
produto.descricao = 'Camisa';
delete produto.tag;

console.log(produto);

const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
pessoa.sexo = 'M';
delete pessoa.nome;
pessoa.nome = 'Res';

console.log(pessoa)