let dobro = function (a) {
  return a * 2;
}

let dobro2 = (a) => { return a * 2 };

let dobro3 = a => 2 * a;

let ola = function () {
  console.log('Olá');
}
ola = () => 'Olé';


ola = _ => 'Ola';
console.log(ola());