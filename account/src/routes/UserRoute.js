import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router
  .get('/users', UserController.getAllUsers)
  .get('/users/:id', UserController.getUserById)
  .post('/users', UserController.postUser)
  .put('/users/:id', UserController.putUser)
  .delete('/users/:id', UserController.deleteUser)

export default router;   