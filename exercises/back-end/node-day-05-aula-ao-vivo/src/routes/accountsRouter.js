const { Router } = require('express');
const connection = require('../connection');

const accountsRouter = Router();

accountsRouter.get('/', async (_req, res) => {
  const [accounts] = await connection.execute('SELECT * FROM accounts');
  return res.status(200).json(accounts);
});

accountsRouter.post('/', async (req, res) => {
  const { name, email, type } = req.body;

  const [result] = await connection.execute(
    `INSERT INTO 
    accounts(name, email, type)
    VALUES (?, ?, ?)`, [name, email, type]);

  const account = {
    id: result.insertId,
    name,
    email,
    type
  }

  return res.status(201).json(account);
});

accountsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email, type } = req.body;

  const result = await connection.execute(`UPDATE accounts 
    SET name=?, email=?, type=?
      WHERE id=?`, [name, email, type, id]);

  return res.status(200).json(result);
});

accountsRouter.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const result = await connection.execute(`DELETE FROM 
    accounts WHERE id = ?`, [id]);

  return res.status(200).json(result);
});

accountsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  '(DELETE from accounts;)'
  const [account] = await connection.execute(`
    SELECT * 
    FROM accounts
    WHERE id = ?`,
    [id]);
  return res.status(200).json(account);
});

module.exports = accountsRouter;