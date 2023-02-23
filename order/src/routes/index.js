import express from 'express';
import saleRoute from './saleRoute.js';

const routes = (app) => {
    app.use(express.json(), saleRoute);
};

export default routes;
