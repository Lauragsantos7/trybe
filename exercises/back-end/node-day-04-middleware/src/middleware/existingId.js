// refatorando os do  time de futebol do dia 02: conferindo se o ID válido.

  const teams = require('../teams');
 

existingId = (req, res, next) => {
  const id = Number(req.params.id);
  // desestruturação de id não funciona se tiver com o Number(req.params);

  if (!teams.some((t) => t.id === id)) {
    return res.status(404).send({ message: "Time não econtrado" });
  }
  next();
};

module.exports = existingId;
