import mongoose, { Schema } from 'mongoose';

const salesSchema = new mongoose.Schema(
  {
    id: { type: String },
    order: {
      type: [{
        product_name: { type: String },
        product_price: { type: Schema.Types.Decimal128 },
        product_qty: { type: Number, min: 1 },
        discount: { type: Schema.Types.Decimal128 }
      }]
    },
    delivery_address: {
      cep: { type: String, required: true },
      street: { type: String, required: true },
      number: { type: String, required: true }
    },
    total_price: { type: Schema.Types.Decimal128 },
    sale_date: { type: Date, default: Date.now }
  }
);

const sales = mongoose.model('sales', salesSchema);

export default sales;
