import express from 'express';
import categoryRoute from './CategoryRoute.js'
import productRoute from './ProductRoute.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ teste: "testando"})
  })
  
  app.use(express.json(), categoryRoute, productRoute);
}

export default routes