const pilotos = ['Vettel', 'Alonso', 'Raikkonem', 'Massa'];
pilotos.pop();//Retirar o ultimo elemento do Array
console.log(pilotos);

pilotos.push('Verstappen'); // Adiciona valores no Array na ultima posição.
console.log(pilotos);

pilotos.shift() // Retirar o primeiro elemento do Array.
console.log(pilotos);

pilotos.unshift('Hamilton') //Adiciona valores no Array na primeira posição.
console.log(pilotos);

pilotos.splice(1, 0, 'Bottas', 'Massa'); // Adiciona e remove exatamento no indice descrito.
console.log(pilotos);

const algunsPilotos = pilotos.slice(2); // Retorna um novo Array partir da posição 2. 
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4) // Retorna um novo array com apatir do parametro 1 incluse e paramentro 4 exclusive
console.log(algunsPilotos2);

