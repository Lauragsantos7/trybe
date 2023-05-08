'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // queryUInterface: é suado pela biblioteca para modificar o DB, seguindo o dialeto do banco que estamos utlizando. Sequelize armaxena os tipos de dados disponíveis no contexto do banco(varchar, string)

    // O objetivo é criar tabela users com com capos e condiçẽos: 
    // id: Identificador do item.

    // É uma chave primária;
    // Valor não pode ser nulo;
    // Possui incremento automático;
    // É do tipo Integer.
    // fullName: Nome completo da pessoa usuária da aplicação.

    // É do tipo String.
    // email: E-mail da pessoa usuária da aplicação.

    // É do tipo String.
    // createdAt: Data da criação do item.

    // Valor não pode ser nulo;
    // É do tipo Date.
    // updatedAt: Data da atualização do item.

    // Valor não pode ser nulo;
    // É do tipo Date.

    await queryInterface.createTable('Users', {id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    fullName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
    // apagando a tabela 
      await queryInterface.dropTable('Users');
  }
};


// com a migration criada, basta executar o seguinte comando no termina: env $(cat .env) npx sequelize db:migrate

// para reverter uma migration:
// env $(cat .env) npx sequelize db:migrate:undo

// adcionar uma nova migration com o dB já criado: para adicionar a coluna phoneNum na tabela users, deve criar um noo arquivo com o comando:
// npx sequelize migration:generate --name add-column-phone-table-users e um novo arquivo será criado. 
