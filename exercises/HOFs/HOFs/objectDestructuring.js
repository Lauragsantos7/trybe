const product = {
  nameP: 'Smart TV Crystal UHD',
  price: '1899.05',
  seller: 'Casas de Minas',
};

const { nameP } = product;
console.log(nameP); // Smart TV Crystal UHD


// definindo o objeto
const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};
// desestruturando objeto dentro de objeto e alterando o nome para planetName
const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
console.log(planetName) // Tatooine


// alterando o nome da variável ao fazer a desestruturação e criando um valor padrão para uma chave que não existe no objeto:
const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const studen = { a: nameStudent, b: clas, c: subject, not = '10' } = student;
console.log(studen)

