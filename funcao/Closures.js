//Closure é o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular a variavel á função

// Contexto léxico em ação!

/*const x = 'Global'


function fora() {
  const x = 'Local'
  function dentro() {
    return x;
  }
  return dentro;
}



const minhaFuncao = fora();

console.log(minhaFuncao());*/
/*
function minhaBiblioteca() {
  function auxiliar(valor) {
    return valor + 10;
  }
  return {
    add5() {
      return auxiliar(5);
    },
    add7() {
      return auxiliar(7);
    }
  }
}

var bilioteca = minhaBiblioteca();
console.log(bilioteca.add7());
console.log(bilioteca.add5());
*/

function inicializa() {
  let nome = 'Tiago';
  setTimeout(function () {
    console.log(nome);
  }, 5000)
}
inicializa();
