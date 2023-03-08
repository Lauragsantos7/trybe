const app = require('./app');

app.listen(3001, () => console.log('Oi deus'));

// o start é provido pelotrecho app.listen e dentro dele ṕodemos passar dois parâmetros: o primeira é o 'port' ou porta - pode ser qqr número não usado acima de 1023.
// o segundo é uma função.

// vá no arquivo package.json e adicone os scripts:
// "start": "node src/server.js",
// "dev": "nodemon src/server.js",
// "lint": "eslint --no-inline-config --no-error-on-unmatched-pattern -c .eslintrc.json ."

// instalar nodemom parar reiniciar a app automaticamente toda vez que ela for atualizada
// para rodar a app: npm run dev