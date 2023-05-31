// insere informações novas no array sem alterar o seu original.

// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Meia'];


// spread em objetos:
const product = {
  id: 1,
  name: 'Camiseta',
};
const newProduct = { ...product, price: 23 };