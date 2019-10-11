const carro = {
  velAtual: 0,
  velMax: 200,
  acelerarMais(delta) {
    if (this.velAtual + delta <= this.velMax) {
      this.velAtual += delta;
    } else {
      this.velAtual = this.velMax;
    }
  },
  status() {
    return `${this.velAtual} km/h de ${this.velMax} km/h`
  }
}
const ferrari = {
  modelo: 'F40',
  velAtual: 100,
  velMax: 375
}

const volvo = {
  modelo: 'V40',
  velAtual: 0,
  status() {
    return `nome: ${this.modelo} ${super.status()}`
  }
}

console.log(volvo);
console.log(ferrari);

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);
ferrari.acelerarMais(900);
volvo.acelerarMais(50);
console.log(ferrari.status());
console.log(volvo.status());