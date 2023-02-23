import mongoose, { Schema } from 'mongoose';

const orderSchema = new mongoose.Schema(
    {
        product_name: { type: String, required: true },
        product_price: { type: Schema.Types.Decimal128, required: true },
        product_qty: { type: Number, min: 1, required: true },
        discount: { type: Schema.Types.Decimal128, required: true },
        _id : false 
    }
);

const salesSchema = new mongoose.Schema(
    {
        id: { type: String },
        user_info: {
            name: { type: String, required: true },
            cpf: { type: String, match: /[\d]{11}/, required: true }
        },
        order: [orderSchema],
        delivery_address: {
            cep: { type: String, required: true },
            street: { type: String, required: true },
            number: { type: String, required: true },
            complement: { type: String }
        },
        total_price: { type: Schema.Types.Decimal128, required: true },
        sale_date: { type: Date, default: Date.now }
    }, { versionKey: false }
);

const sales = mongoose.model('sales', salesSchema);

export default sales;
