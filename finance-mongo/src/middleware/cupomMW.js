import Joi from 'joi';

const validadeCupom = (req, res, next) => {
    const cupomSchema = Joi.object().keys({
        user_id: Joi.string().required,
        sale_id: Joi.string().required,
        payment_id: Joi.string().required
    });

    const { error } = cupomSchema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    next();
    return true;
};

export default validadeCupom;
