// src/services/address.service.js

// busca todos os endeteços pelo ID
const { Address } = require('../models/');

const getAllByEmployeeId = async (employeeId) => {
  const addresses = await Address.findAll({ where: { employeeId } });

  return addresses;
};

module.exports = {
  getAllByEmployeeId,
}