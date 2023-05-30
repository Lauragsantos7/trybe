const express = require('express');
const connection = require('./routes/connection');
const accountsRouter = require('./routes/accountsRouter');

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).json({
    message: 'Welcome to TrybeBank',
  });
});

app.use('/accounts', accountsRouter);

module.exports = app;