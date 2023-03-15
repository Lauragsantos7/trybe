const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const app = express();

app.use(express.json());

// pacote morgan de logs de erros
require('express-async-errors');
// npm install express-async-errors --save
app.use(morgan('dev'));

// middleware para permitir que o front consuma a API
app.use(cors());

// midleware de segurança: 
app.use(helmet());
// npm install helmet@6.0.1 --save-exact
// define cabeçalhos de rotas http relacionados à segurança. Ex: ataques de script entre sites, impor conexoes seguras(HTTPS) ao servidor...


// mid para limitar requisições repetidas:
const limiter = rateLimit({
    max: 100, // número máximo de requisições
    windowMs: 15 * 60 * 1000, // intervalo de tempo, em milissegundos, para atingir o número máximo de requisições
    message: "Muitas requisições originadas desta IP" // mensagem personalizada quando atinge o limit rate
 });
 
 app.use(limiter);;


const validateTeam = require('./middleware/validateTeam');
const existingId = require('./middleware/existingId');
const teams = require('./teams');


let nextId = 3;


app.use(express.json());


app.get("/teams", (req, res) => res.json(teams));

app.get("/teams/:id", existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});


// Arranja os middlewares para chamar validateTeam primeiro, como parametro da fun. Não pode estar dentro da função.
app.post('/teams', validateTeam, (req, res) => {
    if (
      // confere se a sigla proposta está inclusa nos times autorizados
      !req.teams.teams.includes(req.body.sigla)
      // confere se já não existe um time com essa sigla
      && teams.every((t) => t.sigla !== req.body.sigla)
    ) {
      return res.status(422).json({ message: 'Já existe um time com essa sigla'});
      // usar return ou else dentro do if para encerrar a função e não dar erro.
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
  });

app.put("/teams/:id", existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);

});

app.delete("/teams/:id", existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find((t) => t.id === id);
  const index = teams.indexOf(team);
  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;



