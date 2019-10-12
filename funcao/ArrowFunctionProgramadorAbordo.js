const soma = (a, b) => {
  return a + b;
}
console.log(soma(10, 5));

const subtrair = (a, b) => a - b;
console.log(subtrair(50, 15));

const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 5));

const retornaUsuario = () => ({ nome: 'Tiago', idade: 49 });
console.log(retornaUsuario());

const retornaPessoa = cidade => ({ nome: 'Stiga', idade: 27, cidade });
console.log(retornaPessoa());

const imprimirThis = () => {
  console.log(this);
}
imprimirThis();



