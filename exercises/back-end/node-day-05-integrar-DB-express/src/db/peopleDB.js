// agrupa todas as operações SQL relacionadas à tabela 

// insrindo uma pessoa no DB:
const conn = require('./connection');

const insert = (person) => conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
    [person.firstName, person.lastName, person.email, person.phone],
  );
  // a função conn.executte recebe dois params: um string(usando crase para possibilitar a quebra de linhas), e o segundo, um array de valores extraídos do obketo person. Os pontos de interrogação são chamados placeholders ou marcadores e são usados para marcar os locais que ser]ao substituiídos pelos valroes dentro da consulta SQL. Essas interrogaçẽos serão substituídas pelos valores do array que foi passado como segundo param. A chamada dessa função é o que caracteriza uma prepared statement no mysql2

const findAll = () => conn.execute('SELECT * FROM people');

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);

const update = (person, id) => conn.execute(
  `UPDATE people 
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  [person.firstName, person.lastName, person.email, person.phone, id],
);

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};