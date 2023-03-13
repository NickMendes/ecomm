import Joi from 'joi';

const validateCategory = (req, res, next) => {
    const categorySchema = Joi.object().keys({
        name: Joi.string().required(),
        status: Joi.string().valid('Ativa', 'Inativa')
    });

    const { error } = categorySchema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    next();
    return true;
};

export default validateCategory;
