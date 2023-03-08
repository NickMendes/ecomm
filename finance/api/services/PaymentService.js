const { Payments } = require('../models');

const getAll = async () => Payments.findAll();

const getById = async (id) => Payments.findByPk(id);

const add = async (newPayment) => {
    const result = await Payments.create({ ...newPayment });
    return result;
};

const updateStatus = async (newStatus, id) => {
    const result = await Payments.update({ status: newStatus }, { where: { id: Number(id) } });
    return result;
};

const destroy = async (id) => {
    const checkPayment = await Payments.findByPk(id);
    if (!checkPayment) return { notExist: ! checkPayment };

    const result = await Payments.destroy({ where: { id: id } });
    return result;
};

module.exports = {
    getAll,
    getById,
    add,
    updateStatus,
    destroy
};
