import express from 'express';
import categoryRoute from './CategoryRoute.js';
import productRoute from './ProductRoute.js';

const routes = (app) => {
    app.use(express.json(), categoryRoute, productRoute);
};

export default routes;
