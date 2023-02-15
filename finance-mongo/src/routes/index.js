import express from 'express';
import paymentRoute from './PaymentRoute.js'

const routes = (app) => {
  app.use(express.json(), paymentRoute);
}

export default routes