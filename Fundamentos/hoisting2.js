console.log(a);
var a = 123;
console.log(a);

console.log(soma(10, 8));

function soma(a, b) {
  return a + b;
}

function testaHoisting() {
  console.log('TesteHoisting', aaa);
  var aaa = 15;
}
testaHoisting();

function calcular() {
  return geraResulatado();

  function soma(a, b) {
    return a + b;
  }
  function geraResulatado() {
    return soma(10, 5) / 3;
  }

}

console.log(calcular());
