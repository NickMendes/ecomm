import express from 'express';
import userRoute from './UserRoute.js'

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({ teste: "testando"})
  })
  
  app.use(express.json(), userRoute);
}

export default routes