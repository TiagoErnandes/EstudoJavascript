
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
  fala() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa('Stiga');
p1.fala();

const criarPes = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}
const p2 = criarPes('Stiga')
p2.falar();

console.log(typeof p1);
console.log(typeof p2);