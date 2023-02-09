const cupomService = require('../services/CupomService');

const getAll = async (_req, res) => {
  try {
    const result = await cupomService.getAll();
    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await cupomService.getById(id);
    if(!result) return res.status(404).json({ message: 'Cupom not found' });

    return res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const add = async (req, res) => {
  const newCupom = req.body;

  try {
    const result = await cupomService.add(newCupom);
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
    const result = await cupomService.update(newInfo, id);
    return res.status(201).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await cupomService.destroy(id);
    if (!result) return res.status(400).json({ message: 'Something went wrong' });
    if (result.notExist) return res.status(404).json({ message: 'Cupom does not exists' });

    return res.status(202).json({ message: `Cupom id:${id} deleted` });
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
