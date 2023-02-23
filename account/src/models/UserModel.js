import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { 
      type: String,
      required: true
    },
    email: { 
      type: String,
      // match: /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      required: true
    },
    password: { 
      type: String,
      match: /^(?=.{8,32}$)(?=.*[a-z]).*\d.*\D/i,
      required: true
    },
    cpf: { 
      type: String,
      match: /[\d]{11}/,
      required: true
    },
    phones: { 
      type: [{ type: String, match: /[\d]{11}/ }]
    },
    address: { 
      cep: { type: String, match: /[\d]{5}-[\d]{3}/, required: true },
      street: { type: String, required: true },
      number: { type: String, required: true },
      complement: String,
      city: { type: String, required: true },
      state: {
        type: String,
        enum: ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO",
        "MA", "MG", "MS", "MT", "PA", "PB", "PE", "PI", "PR", "RJ",
        "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"]
      }
     },
     creation_date: { 
      type: Date,
      default: Date.now
    },
  }, { versionKey: false }
);

const users = mongoose.model('users', userSchema);

export default users;