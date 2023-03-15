// src/middlewares/apiCredentials.js

//...
module.exports = async function apiCredentials(req, res, next) {
    //...
    const authorized = JSON.parse(authdata);
    console.log(authorized);
    if (token in authorized) {
      // modifica o req para guardar a informação importante
      req.teams = authorized[token];
      next();
    } else {
      res.status(401).json({ message: 'Token inválido ou expirado.'});
    }
  };