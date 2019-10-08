

/*function imprimirNotas(notas, indice) {
  console.log(`${indice + 1} . ${notas}`)
}

notas.forEach(imprimirNotas);

notas.forEach((a) => {
  console.log(a)
}
)*/
const notas = [7, 5.5, 9.7, 4.7, 10, 9, 8.7, 25];

let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 8) {
    notasBaixas.push(notas[i]);
  }
}

for (let i in notasBaixas) {
  console.log(notasBaixas[i]);
}

notasBaixoFilter = notas.filter((nota) => {
  return nota <= 7;
});
console.log(notasBaixoFilter);