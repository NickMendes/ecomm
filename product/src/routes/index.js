import express from 'express';
import categoryRoute from './CategoryRoute.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ teste: "testando"})
  })
  
  app.use(express.json(), categoryRoute);
}

export default routes