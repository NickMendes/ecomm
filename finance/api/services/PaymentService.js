const { Op } = require('sequelize');
const { Payments } = require('../models');

const getAll = async () => Payments.findAll();

const getById = async (id) => Payments.findByPk(id);

const add = async (newPayment) => {
  const result = Payments.create({ ...newPayment });
  return result;
}

module.exports = {
  getAll,
  getById,
  add
}
