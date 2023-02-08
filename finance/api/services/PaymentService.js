const { Op } = require('sequelize');
const { Payments } = require('../models');

const getAll = async () => {
  const result = Payments.findAll();
  return result
};

module.exports = {
  getAll
}
