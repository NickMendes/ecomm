const { Addresses } = require('../models');

const getAll = async () =>  Addresses.findAll();

const getById = async (id) => Addresses.findByPk(id);

const add = async (newAddress) => {
    const result = await Addresses.create({ ...newAddress });
    return result;
};

const update = async (newInfo, id) => {
    await Addresses.update( { ...newInfo }, { where: { id: id } });

    const result = await Addresses.findByPk(id);
    return result;
};

const destroy = async (id) => {
    const checkAdd = await Addresses.findByPk(id);
    if (!checkAdd) return { notExist: !checkAdd };

    const result = await Addresses.destroy({ where: { id: id } });
    return result;
};

module.exports = {
    getAll,
    getById,
    add,
    update,
    destroy
};
