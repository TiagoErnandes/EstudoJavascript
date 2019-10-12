let novoUsuario = {
  nome: 'Tiago',
  idade: 27,
  pais: 'Brasil',
  youtube: 'Programador a Bordo'
};

let nome = novoUsuario.nome;
let pais = novoUsuario.pais;

console.log(nome);
console.log(pais);

let { idade } = novoUsuario;
console.log(idade);

let { youtube: canal } = novoUsuario;
console.log(canal);

let novoUsuario3 = {
  nome: {
    primeiro: 'Tiago',
    segundo: 'Moreira'
  }
}

let { nome: { segundo = 'valor default' } } = novoUsuario3;
console.log(segundo);

function imprimeUsuario({ nome, idade, sexo }) {
  console.log(nome);
  console.log(idade);
  console.log(sexo);
}
let usuario5 = {
  nome: 'Rafael',
  idade: 25,
  sexo: 'M'
}

imprimeUsuario(usuario5);

console.log(Object.keys(usuario5));
console.log(Object.values(usuario5));