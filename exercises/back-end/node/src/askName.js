const readLine = require('readline-sync');

const askName = () => name = readLine.question('Qual biblioteca? \n');

module.exports = askName;

 // npx comecou-fds

// ler o input no terminal: readline-sync. captura e armazena em uma var
// criar um pacote node/npm: npm init (-y para aceitar tudo como default, sem precisar preencher manualmente)
// instalar biblioteca: npm i readline-sync
// package-lock trás os links das dependências, pra app não precisar  ficar procurando na hora de rodar o npm install

// para importar a biblioteca na app: const nome-da-const = require('biblioteca');

// em package.json, ir em scrips e colocar os scripts que deseja utilizar. Por exemplo, usar o start para rodar a aplicação:  "start": "node ." O ponto(.) referencia o main(arquivo de entrada/ principal).Qdo digitar npm start no terminal, o arquivo index.js será rodado. como index está na pasta 'src', deve colocar esse caminho em main.

// exportar função: module.exports = func-que-quer-exportar