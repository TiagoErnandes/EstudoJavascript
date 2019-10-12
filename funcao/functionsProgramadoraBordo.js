

function usuario() {
  this.nome = 'Tiago';
  this.idade = 23;
  this.soma = function (a, b) {
    return a + b;
  }

}

let usu = new usuario();
//console.log(usu);

function Personagem(p1, p2, p3) {
  console.log('personagem this', this);
  console.log(p1, p2, p3);
}
let personagemThis = {
  nome: 'Stiga'
}

Personagem.call(personagemThis, 'try', 'catch', 8769);


//Personagem.apply(personagemThis, ['para2', 321, [15, 8, 9]]);


let varqualquer = Personagem.bind(personagemThis, 'Olá', 'Mundo');
varqualquer('xD');