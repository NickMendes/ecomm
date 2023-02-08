const { Payments } = require('../models');

const getAll = async () => Payments.findAll();

const getById = async (id) => Payments.findByPk(id);

const add = async (newPayment) => {
  const result = await Payments.create({ ...newPayment });
  return result;
}

const updateStatus = async (newStatus, id) => {
  const result = await Payments.update({ status: newStatus }, { where: { id: Number(id) } });
  console.log(result);
  return result;
}

module.exports = {
  getAll,
  getById,
  add,
  updateStatus
}
