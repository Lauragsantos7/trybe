const greeting1 = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined!


// Com o ES6, podemos pré-definir um parâmetro padrão para a função. Assim, podemos reescrever o exemplo anterior da seguinte forma:

const greeting = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome pessoa usuária!


// Assim, o default será utilizado caso nenhum argumento seja fornecido à função. Você pode adicionar mais de um parâmetro default, caso sua função receba vários argumentos, se achar necessário.