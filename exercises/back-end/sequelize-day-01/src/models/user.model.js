// criando tabela users que contem dados de várias pessoas:

// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      phoneNum: DataTypes.STRING,
    });
  // sincronizando a model com os métodos do sequel (apagar após sinc)
    (async () => {
        await sequelize.sync({ force: true });
        // toda vez que o servidor for inciiado, a tabela será recriada. isso é útil para testes, mas não deve ser usado em produção. 
})();
    return User;
  };
  
  module.exports = UserModel;

  // o model se chama user e como não há um nome da tabela, por padrão, será o plural do model(users)
  // para explciitar o nome, basta acrescentar um param na função do model , o tableName