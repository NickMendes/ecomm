import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        id: { type: String },
        name: { 
            type: String,
            minLength: 3,
            match: /^[a-zA-Z][a-zA-Z0-9.,$; ]+$/,
            required: true
        },
        description: { type: String, required: true },
        slug: { 
            type: String,
            match: /^[a-zA-Z0-9-]+$/,
            required: true
        },
        unit_price: { 
            type: Number,
            min: 0,
            required: true
        },
        storage_qty: { 
            type: Number,
            min: 0,
            max: 10000,
            required: true
        },
        category_id: { 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories',
            required: true
        },
    }, { versionKey: false }
);

const products = mongoose.model('products', productSchema);

export default products;
