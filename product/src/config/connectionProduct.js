import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

mongoose.connect( process.env.CONNECTION_STRING);

let db = mongoose.connection;

export default db;
