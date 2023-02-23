const saleService = require('../services/SaleService');

const getAll = async (_req, res) => {
  try {
    const result = await saleService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await saleService.getById(id);
    if(!result) return res.status(404).json({ message: 'Sale not found' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const newSale = req.body;

  try {
    const result = await saleService.add(newSale);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }  
};

const update = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  try {
    const result = await saleService.update(newInfo, id);
    return res.status(202).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await saleService.destroy(id);
    if (!result) return res.status(400).json({ message: 'Something went wrong' });
    if (result.notExist) return res.status(404).json({ message: 'Sale does not exists' });

    return res.status(202).json({ message: `Sale id:${id} deleted` });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAll,
  getById,
  add,
  update,
  destroy
};
