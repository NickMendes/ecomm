const paymentService = require('../services/PaymentService');

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

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const newPayment = req.body;
  
  const result = await paymentService.add(newPayment);
  return res.status(201).json(result);
};

module.exports = {
  getAll,
  getById,
  add
}
