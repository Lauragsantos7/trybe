const employees = [
  { id: 1, nome: 'Douglas Adams', idade: 20},
  { id: 2, nome: 'H. G. Wells', idade: 18},
  { id: 3, nome: 'Júlio Verne', idade: 57},
  { id: 4, nome: 'Margaret Atwood', idade: 83},
  { id: 5, nome: 'Edgar Allan Poe', idade: 19},
];

employees.find((employee) => employee.id === 2).nome;


const numbers = [19, 21, 30, 3, 45, 22, 15];

// divisível por 3 e 5
const divi = numbers.find((numb) => numb % 3 === 0 && numb % 5 === 0)
console.log(divi)