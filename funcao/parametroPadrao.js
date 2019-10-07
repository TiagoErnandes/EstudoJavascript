function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  c = isNaN(c) ? 1 : c;
  return a + b + c
}

function somaec2015(a = 1, b = 2, c = 1) {
  return a + b + c;
}

console.log(soma2(0, 0, 5));

console.log(somaec2015(4, 8, 0))