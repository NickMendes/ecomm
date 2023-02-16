import mongoose, { Schema } from 'mongoose';

const userSubSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    cpf: { 
      type: String,
      match: /[\d]{11}/,
      required: true
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
        "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"],
        required: true
      }
     },
     _id: false
  }
);

const orderSubSchema = new mongoose.Schema(
  {
    product_name: { type: String, required: true },
    product_price: { type: Schema.Types.Decimal128, required: true },
    product_qty: { type: Number, min: 1, required: true },
    discount: { type: Schema.Types.Decimal128, required: true },
    _id : false 
  }
);

const salesSubSchema = new mongoose.Schema(
  {
    order: [orderSubSchema],
    total_price: { type: Schema.Types.Decimal128, required: true },
    sale_date: { type: Date, default: Date.now },
    _id: false
  }
);

const paymentSubSchema = new mongoose.Schema(
  {
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
    status: { 
      type: String,
      enum: ['CONFIRMADO', 'CRIADO'],
      required: true
    },
    _id: false
  }
)

const cupomSchema = new mongoose.Schema(
  {
    id: { type: String },
    user_info: userSubSchema,
    sale_info: salesSubSchema,
    payment_info: paymentSubSchema
  }, { versionKey: false }
);

const cupoms = mongoose.model('cupoms', cupomSchema);

export default cupoms;
