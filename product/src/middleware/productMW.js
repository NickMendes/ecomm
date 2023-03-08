import Joi from 'joi';

const validadeProduct = (req, res, next) => {
    const productSchema = Joi.object().keys({
        name: Joi.string().pattern(/^[a-zA-Z][a-zA-Z0-9.,$; ]+$/).required(),
        description: Joi.string().required(),
        slug: Joi.string().pattern(/^[a-zA-Z0-9-]+$/).required(),
        unit_price: Joi.number().min(1).required(),
        storage_qty: Joi.number().min(1).required(),
        category_id: Joi.string().required()
    });

    const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(422).json({ message: error.message });
  }
  next();
  return true;
};

export default validadeProduct;
