import mongoose, { Schema } from 'mongoose';

const paymentSchema = new mongoose.Schema(
    {
        id: { type: String },
        value: {
            type: Schema.Types.Decimal128,
            required: true
        },
        name: { 
            type: String,
            minLength: 5,
            required: true
        },
        card_number: {
            type: String,
            match: /[\d]{16}/,
            require: true 
        },
        expiration_date: {
            type: String,
            match: /([\d]{4}-(0[1-9]|10|11|12)$)/,
            required: true
        },
        cvv: {
            type: String,
            match: /[\d]{3}/,
            require: true 
        },
        status: { 
            type: String,
            enum: ['CRIADO', 'CONFIRMADO', 'CANCELADO'],
            default: 'CRIADO',
            required: true
        }
    }, { versionKey: false }
);

const payments = mongoose.model('payments', paymentSchema);

export default payments;
