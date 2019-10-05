
function tratarErro(erro) {
  //throw new Error('..Bagaçou Tudo ')
  //throw 50;
  throw {
    nome: erro.name,
    msg: erro.message,
    tot: 15,
    date: new Date
  }

}


function imprimiNome(obj) {

  try {
    console.log(obj.name.toUpperCasa() + '!!!!');
  } catch (e) {
    tratarErro(e);

  } finally {
    console.log('Concerteza ira executar')
  };
}
const obj = { nome: 'Tiago' };
imprimiNome(obj);