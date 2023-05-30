// ./models/connection.ts

import mysql from 'mysql2/promise'; // instalar mysql2

// ou import { createPool } from ''mysql/promise' e exportar apenas o createPoll

const connect = mysql.createPool({
  // host: process.env.DB_HOSTNAME,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,
  host: 'localhost',
  user: 'root',
  password: 'password', 
  database: 'books_api'
});
export default connect;