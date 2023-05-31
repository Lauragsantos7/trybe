// filter: filtra o item do array de acordo com alguma condição

const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];
/// lisar apenas os nomes
const nomes = dados.filter((dado) => typeof(dado) === 'string')
console.log(nomes)


const listaNumeros = [10, 20, 30, 40];
// numeros maiores que 20
const numbers = listaNumeros.filter((number) => number > 20);
console.log(numbers)

// arrays
const students = [
  { id: 1, nome: 'Douglas Adams', nota: 20},
  { id: 2, nome: 'H. G. Wells', nota: 18},
  { id: 3, nome: 'Júlio Verne', nota: 57},
  { id: 4, nome: 'Margaret Atwood', nota: 83},
  { id: 5, nome: 'Edgar Allan Poe', nota: 19},
];

const studen = students.filter((elem) => elem.nota > 30)
console.log(studen)