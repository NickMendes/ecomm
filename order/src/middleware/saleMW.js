import Joi from 'joi';

const validateSale = (req, res, next) => {
    const orderSchema = Joi.object().keys({
        product_id: Joi.string().required(),
        product_qty: Joi.number().min(1).required(),
        discount: Joi.number()
    });

    const addressSchema = Joi.object().keys({
        cep: Joi.string().pattern(/[\d]{5}-[\d]{3}/).required(),
        street: Joi.string().required(),
        number: Joi.string().required(),
        complement: Joi.string()
    });

    const saleSchema = Joi.object().keys({
        user_id: Joi.string().required(),
        delivery_address: addressSchema,
        order: orderSchema
    });

    const { error } = saleSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    next();
    return true;
};

export default validateSale;
