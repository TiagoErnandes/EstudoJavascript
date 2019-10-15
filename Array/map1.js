const nums = [1, 2, 3, 4, 5]
const numsDobro = nums.map(function (e) {
  return e * 2;
})
console.log(numsDobro);

const soma10 = e => e + 10;
const tripo = e => e * 3;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


const somanums10 = nums.map(soma10).map(tripo).map(paraDinheiro);


console.log(somanums10);

