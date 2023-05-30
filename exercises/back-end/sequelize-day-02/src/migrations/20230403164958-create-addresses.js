// src/migrations/[timestamp]-create-addresses.js

// criar essa migration : npx sequelize migration:generate --name create-addresses

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      city: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      number: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        // Configuram o que deve acontecer ao atualizar ou excluir um usuário
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'employee_id',
        // Informa que o campo é uma Foreign Key (Chave estrangeira)
        references: {
          // Informa qual tabela a foreign key está referenciando 
          model: 'employees',
          // Informa qual coluna da tabela estangeira deve ser utilizada para nossa foreign key
          key: 'id',
        },
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('addresses');
  },
};

// essa migration cria uma foreign key na tabela address, que relaciona o campo employee_id dessa tabela ao campo id da tabela employees

// grando as migrations: env $(cat .env) npx sequelize db:migrate