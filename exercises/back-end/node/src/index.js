const askName = require('./askName');
const fetch = require('node-fetch');


const name = askName();
console.log(`Buscando biblioteca ${name}...`)

const getPackage = async () => {
    const API_URL = 'https://registry.npmjs.org'
  try{
    const response = await fetch(`${API_URL}/${name}`);
    const data = await response.json();
    if(data.name) console.log('é um pacote npm');
    else console.log('Não é um pacote npm');
    console.log(data);
} catch (err) {
    console.log(err.message)
}
}; getPackage();



// importar função de outra pag: const nome-da-const = require(./pagina);

// fazer uma request para o endPoint https://registry.npmjs.org com o nome da biblioteca que deseja. 
// npm i node-fetch para instalar o  fetch

// 


