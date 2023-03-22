import Joi from 'joi';

const validatePayment = (req, res, next) => {
    const paymentSchema = Joi.object().keys({
        value: Joi.number().min(1).required(),
        name: Joi.string().min(5).required(),
        card_number: Joi.string().creditCard().required(),
        expiration_date: Joi.string().pattern(/([\d]{4}-(0[1-9]|10|11|12)$)/).required(),
        cvv: Joi.string().pattern(/[\d]{3}/).required()
    });

    const { error } = paymentSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    next();
    return true;
};

export default validatePayment;
