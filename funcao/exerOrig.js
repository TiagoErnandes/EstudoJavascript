function truthy(test) {
  return !!test;
}

function perimetroQuadrado(ladoA, ladoB) {
  return (ladoA * 2) + (ladoB * 2);
}

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}.`
}

function imparouPar(num) {
  if (num % 2 == 0) {
    return 'PAR'
  } else {
    return 'IMPAR'
  }
}

function tipoVariavel(variavel) {
  return (typeof variavel);
}

/*addEventListener('scroll', function () {
  console.log('nomeCompleto');
});*/


console.log(truthy(7));

console.log(perimetroQuadrado(4, 4));
console.log(nomeCompleto('Tiago', 'Ernandes'));

console.log(imparouPar(858));

console.log(tipoVariavel(truthy()));


