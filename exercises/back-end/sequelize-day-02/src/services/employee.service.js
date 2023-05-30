// src/services/employee.service.js

const { Address, Employee } = require('../models/');
const Sequelize = require('sequelize');
const config = require('../config/config');

const env = process.env.NODE_ENV || 'development';
// Ajustamos para usar a configuração correta para nosso ambiente
const sequelize = new Sequelize(config[env]);



const getAll = async () => {
  const users = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });

  return users;
};

const getById = async (id) => {
    const employee = await Employee.findOne({
        where: { id },
        // include: [{ model: Address, as: 'addresses' }],
        // exclui o include para testar o lazy loading: true e false na requisição do endereço
      });
    return employee;
  }

  const insert = async ({ firstName, lastName, age, city, street, number }) => {

    const t = await sequelize.transaction();
  try {
    // Depois executamos as operações
    const employee = await Employee.create(
      { firstName, lastName, age },
      { transaction: t },
    );

    await Address.create(
      { city, street, number, employeeId: employee.id },
      { transaction: t },
    );

    // Se chegou até essa linha, quer dizer que nenhum erro ocorreu.
    // Com isso, podemos finalizar a transação usando a função `commit`.
    await t.commit();
    return employee;
  } catch (e) {
    // Se entrou nesse bloco é porque alguma operação falhou.
    // Nesse caso, o sequelize irá reverter as operações anteriores com a função rollback, não sendo necessário fazer manualmente
    await t.rollback();
    console.log(e);
    throw e; // Jogamos o erro para a controller tratar
  }
  };


  // gerencimanto pelo próprio Sequelize:
// const insert = async ({ firstName, lastName, age, city, street, number }) => {
 // const result = await sequelize.transaction(async (t) => {
  // const employee = await Employee.create({
  //   firstName, lastName, age,
  //  }, { transaction: t });
//
  //  await Address.create({
  //    city, street, number, employeeId: employee.id
  //  }, { transaction: t });
   // return employee;
  //});

 // return result;
  // Se chegou até aqui é porque as operações foram concluídas com sucesso,
  // não sendo necessário finalizar a transação manualmente.
  // `result` terá o resultado da transação, no caso um empregado e o endereço cadastrado
// };
 // como é gerenciada, não precisa do try catch, pois o sequelize faz o rollback automaticamente. Faz sentido tratar esse erro na camada de controle




  // se não quisermos acesso ao numero do endereçp:

  // const getById = async (id) => {
//   const employee = await Employee.findOne({
//       where: { id },
// include: [{
 //   model: Address, as: 'addresses', attributes: { exclude: ['number'] },
//  }],
//   });
//   return employee;
// }


module.exports = {
  getAll,
  getById,
  insert
 };