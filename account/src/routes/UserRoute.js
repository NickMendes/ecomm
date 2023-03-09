import express from 'express';
import UserController from '../controllers/UserController.js';
import validateAccount from '../middleware/userMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
  .get('/user', UserController.getAllUsers)
  .get('/user/:id', UserController.getUserById)
  .post('/admin/user', tokenVal, validateAccount, UserController.createUser)
  .put('/admin/user/:id', tokenVal, UserController.updateUser)
  .delete('/admin/user/:id', UserController.deleteUser)
  .post('/user/login', UserController.login)
  .get('/user/logout', tokenVal, UserController.logout)

export default router;
