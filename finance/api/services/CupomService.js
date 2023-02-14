const { Cupoms } = require('../models');

const getAll = async () =>  Cupoms.findAll();

const getById = async (id) => Cupoms.findByPk(id);

const add = async (newCupom) => {
  const result = await Cupoms.create({ ...newCupom });
  return result;
};

const update = async (newInfo, id) => {
  await Cupoms.update( { ...newInfo }, { where: { id: id } });

  const result = await Cupoms.findByPk(id);
  return result;
};

const destroy = async (id) => {
  const checkCupom = await Cupoms.findByPk(id);
  if (!checkCupom) return { notExist: !checkCupom };

  const result = await Cupoms.destroy({ where: { id: id } });
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  destroy
};
