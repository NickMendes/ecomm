const { Sales } = require('../models');

const getAll = async () =>  Sales.findAll();

const getById = async (id) => Sales.findByPk(id);

const add = async (newSale) => {
  const result = await Sales.create({ ...newSale });
  return result;
};

const update = async (newInfo, id) => {
  await Sales.update( { ...newInfo }, { where: { id: id } });

  const result = await Sales.findByPk(id);
  return result;
};

const destroy = async (id) => {
  const checkSale = await Sales.findByPk(id);
  if (!checkSale) return { notExist: !checkSale };

  const result = await Sales.destroy({ where: { id: id } });
  return result;
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  destroy
};
