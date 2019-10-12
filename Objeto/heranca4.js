function MeuObjeto() { };
console.log(MeuObjeto.prototype);


const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function () { console.log(`Hello, guys my name is ${this.nome}`) };

obj2.falar();
obj2.nome = 'Stiga';
obj2.falar();

