import mongoose, { Schema } from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true },
    description: { type: String, required: true },
    slug: { type: String, required: true },
    unit_price: { type: Schema.Types.Decimal128, required: true },
    storage_qty: { type: Number, required: true },
    category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'categories', required: true },
  }
);

const products = mongoose.model('products', productSchema);

export default products;