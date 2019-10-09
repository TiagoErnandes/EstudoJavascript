const usuario = {
  nome: 'Rafa',
  idade: 27,
  youtube: 'CursoEmVideo'
}
delete usuario.youtube;
console.log(usuario);

usuario.hobbies = ['Música', 'Programar', 'Viajar'];
console.log(usuario);

usuario.competencia = {
  Linguagens: ['Java', 'PHP', 'PHYTON', 'RUBY'],
  Musica: ['Rock', 'Jaz', 'HipHop']

}

console.log(usuario);

const usuario2 = {
  digaOi(name) {
    return `Olá ${name}`
  }
}

//console.log(usuario2.digaOi('Stiga'));

let cor = 'Azul';
const usuario3 = {
  nome: 'Tiago',
  cor
}
//console.log(usuario3);

const usuario4 = {
  nome: 'Creuza',
  idade: 26
}

const extraInfo = {
  pais: 'Brasil',
  estado: 'Rio de Janeiro'
}

const novoUsuaMerge = Object.assign({}, usuario4, extraInfo);
//console.log(novoUsuaMerge);

//Object.assign(usuario4, extraInfo);
//console.log(usuario4);

const novoUsuario2 = {
  ...usuario4,
  ...extraInfo,
  sexo: 'M',
  profissao: 'Programador'
};

console.log(novoUsuario2);
let nomeVariavel = 'Veiculo';
const usuario5 = {
  nome: 'Bob',
  [nomeVariavel]: 'Carro'
};

console.log(usuario5);
console.log('--------------');

// getters e setters

var usuarios = [{
  nome: 'Tiago',
  idade: 26
},
{
  nome: 'Rafael',
  idade: 26
},
{
  nome: 'Carla',
  idade: 26
}];
console.log(usuarios[0].nome);

const controle = {
  posicao: 0,
  get atual() {
    return usuarios[this.posicao];
  },
  set atual(posicao) {
    this.posicao = posicao;
  },
  proximo() {
    return ++this.posicao;
  },
  anterior() {
    return --this.posicao;
  }
}

console.log(controle.atual);
controle.proximo();

console.log(controle.atual);
controle.proximo();

console.log(controle.atual);
controle.anterior();

console.log(controle.atual);
controle.atual = 0;

console.log(controle.atual);
controle.atual = 2;
usuarios.controle