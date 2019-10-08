const pessoa = {
  saudacao: 'Bom Dia!',
  falar() {
    console.log(this.saudacao);
  }
}

pessoa.falar();

const falarp = pessoa.falar.bind(pessoa);
falarp();

