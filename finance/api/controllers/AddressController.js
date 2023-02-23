const addressService = require('../services/AddressService');

const getAll = async (_req, res) => {
  try {
    const result = await addressService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await addressService.getById(id);
    if(!result) return res.status(404).json({ message: 'Address not found' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const newAddress = req.body;

  try {
    const result = await addressService.add(newAddress);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }  
};

const update = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;
  console.log(newInfo);

  try {
    const result = await addressService.update(newInfo, id);
    return res.status(202).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await addressService.destroy(id);
    if (!result) return res.status(400).json({ message: 'Something went wrong' });
    if (result.notExist) return res.status(404).json({ message: 'Address does not exists' });

    return res.status(202).json({ message: `Address id:${id} deleted` });
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
