import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect('mongodb+srv://NickAdmin:Password123@cluster0.y6erwvt.mongodb.net/ecomm-order' || process.env.CONNECTION_STRING);

let db = mongoose.connection;

export default db;
