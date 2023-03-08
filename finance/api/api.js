const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.use('/payments', routes.paymentRoute);
app.use('/address', routes.addressRoute);
app.use('/sale', routes.saleRoute);
app.use('/cupom', routes.cupomRoute);

module.exports = app;