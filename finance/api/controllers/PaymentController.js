const paymentService = require('../services/PaymentService');
const addressService = require('../services/AddressService');
const saleService = require('../services/SaleService');
const cupomService = require('../services/CupomService');
const helps = require('../../../helpers/helps.js');

const getAll = async (_req, res) => {
  try {
    const result = await paymentService.getAll();
    const resultNoCvv = result.map((ele) => helps.omit(ele.dataValues, ['cvv']))
    
    return res.status(200).json(resultNoCvv);
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

    const resultNoCvv = helps.omit(result.dataValues, ['cvv']);

    return res.status(200).json(resultNoCvv);
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
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status, address, cpf, sale } = req.body;

  try {
    const resultUptade = await paymentService.updateStatus(status, id);
    if (resultUptade[0] === 0) return res.status(400).json({ message: 'Something went wrong' });

    const paymentResult = await paymentService.getById(id);
  
    const addressResult = await addressService.add({ ...address });
    const addressID = addressResult.id;

    const saleResult = await saleService.add({ ...sale, total_price: paymentResult.dataValues.value });
    const saleID = saleResult.id;
    
    if(!saleResult || !addressResult) return res.status(400).json({ message: 'Something went wrong' });

    const cupomResult = await cupomService.add({ name: paymentResult.name, cpf, address_id: addressID, sale_id: saleID, payment_id: id });

    if(!cupomResult) return res.status(400).json({ message: 'Something went wrong' });

    return res.status(202).set('Location', `/payments/${id}`).json({ id, status });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await paymentService.destroy(id);
    if (!result) return res.status(400).json({ message: 'Something went wrong' });
    if (result.notExist) return res.status(404).json({ message: 'Payment does not exists' });

    return res.status(202).json({ message: `Payment id:${id} deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  updateStatus,
  destroy
};
