console.log(typeof Array, typeof new Array);
let aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[5]);
aprovados.push('Stiga');
console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1];
console.log(aprovados);

aprovados.splice(1, 1, 'Elemento1', 'Elemento2');
console.log(aprovados);