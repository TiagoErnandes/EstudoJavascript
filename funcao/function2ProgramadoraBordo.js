function Usuario() {
  this.nome = 'Tel'
  this.idade = 27;

}
let usuario = new Usuario();
Usuario();

console.log(usuario);

function Personagem(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log('PersonagemThis', this)
}
let perso = {
  nome: 'Ernandes'
}

Personagem.call(perso, 'parametro1', 855, [8, 6, 9]);

//Apply os parametro são atribuidos dentro de um Array

