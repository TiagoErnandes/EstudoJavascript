var usuarioFunction = {
  nome: 'Tiago Ernandes',
  idade: 27,
  sexo: 'M',
  pais: 'Brasil'
};

let props = Object.keys(usuarioFunction);
//let val = Object.values(usuarioFunction);

for (let i = 0; i < props.length; i++) {
  console.log(`${props[i]} = ${usuarioFunction[props[i]]}`);
}
console.log('')
for (let prop of props) {
  console.log(usuarioFunction[prop]);
}
console.log('')
for (let val in usuarioFunction) {
  if (usuarioFunction.hasOwnProperty(val)) {
    console.log(val, usuarioFunction[val]);
  }
}


