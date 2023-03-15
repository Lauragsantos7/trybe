// src/server.js
const app = require('./app');
const connection = require('./db/connection');

const PORT = 3001;

app.listen(PORT, async () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}
  `);

  // O código abaixo é para testarmos a comunicação com o MySQL, recebe como param uma consulta SQL SELECT 1. Depois de testar a conexão, pode apagá-lo pq não será mais util
  // const [result] = await connection.execute('SELECT 1');
  // if (result) {
  //   console.log('MySQL connection OK');
  // }
});

// para colocar o trybecash_script dentro da imagem: docker cp caminho-do-trybecash_script nome-container:/
// executar o script: exec idcontainer /bin/sh -c "mysql -uroot -proot </trybecash_script.sql>"
//
