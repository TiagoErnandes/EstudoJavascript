
/*class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  fala() {
    console.log(`Meu nome é ${this.nome}`);
  }
}*/

function pessoa(nome) {
  this.nome = nome;

  this.falar = () => {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p3 = new pessoa('Stiga');
p3.falar()