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

module.exports = {
  getAll
}
