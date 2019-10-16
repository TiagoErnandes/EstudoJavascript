const produtos = [

  { nome: 'Notebook', preco: 2499, fragil: true },
  { nome: 'iPad Pro', preco: 4499, fragil: true },
  { nome: 'Copo De Vidro', preco: 12.49, fragil: true },
  { nome: 'Copo De Plástico', preco: 18.99, fragil: false }

]

console.log(produtos.filter(e => e.fragil && e.preco > 500));