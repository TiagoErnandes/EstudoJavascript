//declaracao de funcao literal ;
function fun1() { };


//Armazenar a função em uma variavel;

const fun2 = function () { };

//Armazenar a função em um Array
const array = [function (a, b) { return a + b }, fun1, fun2];
console.log(array[0](15, 35));

// Armazenar em um atributo de objeto 

const obj = {}
obj.fala = function () { return 'Sabado' }
console.log(obj.fala());

//Passar uma função como parametro;

function run(fun) {
  fun()
}
run(function () { console.log('Executando ...') })

// Uma função pode retorna /conter uma função

function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }

}

soma(5, 5)(7);

const som = soma(15, 8);
console.log(typeof som);
som(50);




