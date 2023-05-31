// sort

// modifica o array original, não precisando atribuir a um novo array

const food = ['arroz', 'feijão', 'farofa', 'chocolate', 'doce de leite'];

console.log(food.sort())


const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];

inventory.sort((a, b) => a - b)
console.log(inventory)

// a função sort recebe os elementos do array e realiza a comparação de cada um deles em pares(el1, el2). Se a operação el1 - el2 der negativo, o el1 vai pra trás, caso contrário, vai pra frente.
// se for fazer ordenação decrescente, basta inverter a lógica do a-b para b-a


//sort com arrays de objetos
const gamers = [
  {
    name: "Eduardo",
    points: [20, 22, 100, 10, 0]
  },
   {
    name: "Mauricio",
    points: [0, 21, 100, 10, 100]
  },
   {
    name: "Carla",
    points: [100, 70, 100, 10, 10]
  }
];

// ordenar pelo nome
gamers.sort((a, b) => a.name > b.name ? 1 : -1)
console.log(gamers)

// ordenar pelos pontos:
gamers.sort((a, b) => {
  let pointsA = 0;
  let pointsB = 0;
  a.points.forEach((el) => pointsA += el);
  b.points.forEach((el) => pointsB += el);
  return pointsA - pointsB;
})