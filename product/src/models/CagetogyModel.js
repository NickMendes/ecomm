import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { 
      type: String,
      minLength: 3,
      match: /^[a-zA-Z][a-zA-Z0-9.,$;]+$/,
      required: true
    },
    status: { 
      type: String,
      enum: ['Ativa', 'Inativa'],
      required: true
    }
  }, { versionKey: false }
);

const categories = mongoose.model('categories', categorySchema);

export default categories;
