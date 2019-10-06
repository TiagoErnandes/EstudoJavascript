function area(largura = 1, altura = 1) {
  const area = largura * altura;

  if (area > 20) {
    console.log(`Valor acima do permitido: ${area} m2`);
  } else {
    return area;
  }
}

console.log(area(4, 4));
console.log(area());
console.log(area(15, 5, 8, 16, 25));