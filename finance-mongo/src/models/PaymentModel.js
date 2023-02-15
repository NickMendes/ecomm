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
      match: /^[a-zA-Z][a-zA-Z.,$; ]+$/,
      required: true
    },
    card_number: {
      type: String,
      minLength: 16,
      maxLength: 16,
      require: true 
    },
    expiration_date: {
      type: String,
      match: /([\d]{4}-(0[1-9]|10|11|12)$)/,
      required: true
    },
    cvv: {
      type: String,
      minLength: 3,
      maxLength: 3,
      require: true 
    },
    status: { 
      type: String,
      enum: ['CRIADO', 'CONFIRMADO', 'CANCELADO'],
      required: true
    }
  }
);

const payments = mongoose.model('payments', paymentSchema);

export default payments;
