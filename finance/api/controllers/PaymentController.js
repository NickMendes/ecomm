const paymentService = require('../services/PaymentService');
const helps = require('../helpers/helps');

const getAll = async (_req, res) => {
  try {
    const result = await paymentService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await paymentService.getById(id);
    if(!result) return res.status(404).json({ message: 'Payment not found' });

    const newResult = helps.omit(result.dataValues, ['cvv']);

    return res.status(200).json(newResult);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const newPayment = req.body;

  try {
    const { id, status } = await paymentService.add(newPayment);
    return res.status(201).set('Location', `/payments/${id}`).json({id, status});
  }catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  add
}
