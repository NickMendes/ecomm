import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://NickAdmin:Password123@cluster0.y6erwvt.mongodb.net/ecomm-user")

let db = mongoose.connection;

export default db;