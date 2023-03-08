const express = require('express');

const app = express();

// para retornar os dados da atualização POST na aba do thunder client em formato correto:
app.use(express.json());
// dentro de app.use passamos uma função que habilita a possibilidade de recebermos dados pelo body de nossa requisição.

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];
// insomnia postman httpie - para testar o back

app.get('/teams', (req, res) => res.status(200).json({ teams }));
// http://localhost:3001/teams  mostra o resultado do objeto teams

// criando um endpoint para receber dados no corpo da requisição do tipo POST(enviar, cadastrar, registrar) com a rota /teams:
app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

// formulários usam post
// Para atualizar os dados, abrir o thunder client e preencher os campos: POST e a url que deseja atualizar
// escolher o campo body e na caixa de diálogo colocar o valor que deseja que seja inserido. clicar em SEND e conferir se a operação funcionou.

// alterar/editar um time com o método PUT:
app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));
  // todos os dados vindos por param ou query são strings , por isso é necessário usar o parser 'Number'.

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }
  // usar o restorno antes da response é uam boa prática pra ajduar a não quebrar o código.

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});
// alem de esperar os dados vindos pelo body da requisição, esperamos tbm um id vindo pela URL , por meio de req.params
// a var updateTeam armazena o resultado da busca pelo id, caso não seja encontrado, uma resposta é dada informando isso. Qdo ele é econttrado, as infos dele no array são alteradas  e salvs dentro do array updateTeam.
// alterar no thunderClient: alterar o método para PUT e a URL para o time/id que deseja editar. E passar os dados novos que deseja.

// usando o método DELETE:
app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));

  teams.splice(arrayPosition, 1);

  res.status(200).end();
});
// id vindo da URL foi capturado, o índice dele foi encontrado no array teams com a função findIndex, e o time foi removido do array com a func splice. Ao final , foi retornado o cod 200.
// para executar, usar o thunder client

module.exports = app;

// dentro da const app temos a função get(para pedir algum dado)
// Ela recebe 2 parêmetros: 1 - '/' é a rota - pode ser '/login', '/produtos', etc. '/' é a rota raiz. 2- (req, res) => {} esse espera uma função de callback que pode receber de 2 a 4 param:
// req: Request ou requisição - recebe os dados  (envio por query, params e body);
// res: Response ou resposta - responde o que nos é solciitado
// nex e err (não abordadas na aula)

// é de costume enviar um status code para identificar o que está acontecendo com nossas requisições: principais: 200 sucesso; 500 erro no servidor; 404 página não encontrada.
// associar com const é uma boa prática.
