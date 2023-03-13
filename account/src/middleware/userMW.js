import Joi from 'joi';

const validateAccount = (req, res, next) => {
    const addressSchema = Joi.object().keys({
        _id: false,
        cep: Joi.string()
            .pattern(/[\d]{5}-[\d]{3}/),
        street: Joi.string()
            .required(),
        number: Joi.string()
            .alphanum()
            .required(),
        complement: Joi.string(),
        city: Joi.string(),
        state: Joi.string()
            .pattern(/(A[CLMP]|BA|CE|DF|ES|GO|M[AGST]|P[ABEIR]|R[JNORS]|S[CEP]|TO)/)
            .required(),
    });

    const schema = Joi.object().keys({
        _id: Joi.string(),
        name: Joi.string()
            .required(),
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } })
            .required(),
        password: Joi.string()
            .pattern(/^(?=.{8,32}$)(?=.*[a-z]).*\d.*\D/i)
            .required(),
        cpf: Joi.string()
            .pattern(/[\d]{11}/),
        phones: Joi.array().items(Joi.string()
            .pattern(/[\d]{9,11}/)),
        address: addressSchema,
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(422).json({ message: error.message });
    }
    next();
    return true;
};

export default validateAccount;