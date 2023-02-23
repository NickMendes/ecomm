import express from 'express';
import paymentRoute from './PaymentRoute.js';
import cupomRoute from './CupomRoute.js';

const routes = (app) => {
  app.use(express.json(), paymentRoute, cupomRoute);
}

export default routes;
