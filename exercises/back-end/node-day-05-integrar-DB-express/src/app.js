// src/app.js

const express = require('express');

//router do arquivo peopleRoutes:
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());

// adicionando esse middleware definido que toda requisição em que o path começa com /people será encaminhada para ele;
app.use('/people', peopleRoutes);

module.exports = app;

// app.listen está sendo execuada na pasta server.js pq para realizar os testes a definição de inicialização, rotas e middlewares do express devem estar separadas da inicialização dele

// dg/peopleDB tem como responsabilidade agrupar todas as operações SQL relacionadas à tabela people. 