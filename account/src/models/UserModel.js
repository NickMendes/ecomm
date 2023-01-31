import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cpf: { type: Number, required: true },
    phones: { type: Array, required: true },
    address: { 
      cep: Number,
      street: String,
      number: Number,
      complement: String,
      city: String,
      state: String
     },
     create_date: { type: Date, default: Date.now },
  }
);

const users = mongoose.model('users', userSchema);

export default users;