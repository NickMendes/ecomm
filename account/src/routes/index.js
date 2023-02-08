import express from 'express';
import userRoute from './UserRoute.js'

const routes = (app) => {
  app.use(express.json(), userRoute);
}

export default routes