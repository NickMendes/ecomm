import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, required: true },
    status: { type: String, required: true }
  }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
