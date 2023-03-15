// src/db/connection.js

const mysql = require('mysql2/promise');

// const connection rece um pool de de conexoes, criado com a função creatPool.
// um pool de conexoes é um repo que contém um conjunto de conexões estabelecidas previamente com o banco de dados, que serão utilizadas durnte a execução da app conforme a necessidade. Sem ele, para cada com o mysql uma conexão seria aberta, e após seu uso, seria fechada. 
// A função createPool recebe um objeto com os seguintes param:
// host: o endereço IP do MySQL(localhost é o mesmo que 127.0.0.1)
// database: nome do SB que queremos realizar a conexão
// waitForConnection: qual será a ação da pool de conexoes qdo nenhuma conexãoe stiver disponível. Se o valor for true, será criada uma fila de espera por conexoes, caso contrário, a pool retornará um callbak com erro. Seu valor padrão é true.
// conectionLimit: número máximo de requisições de conexão que a pool criará de uma vex
// queueLimit:número máx de req de conexão que apool irá enfileirar antes de retornar um erro.
// agora, o express será configurado na pag app.js

const connection = mysql.createPool({
  hhost: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

module.exports = connection;