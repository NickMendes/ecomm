import express from 'express';
import UserController from '../controllers/UserController.js';
import validateAccount from '../middleware/userMW.js';
import tokenVal from '../middleware/authorizationMW.js';

const router = express.Router();

router
    .get('/user', tokenVal, UserController.getAllUsers)
    .get('/user/:id', tokenVal, UserController.getUserById)
    .post('/user', validateAccount, UserController.createUser)
    .put('/user/:id', tokenVal, UserController.updateUser)
    .delete('/user/:id', tokenVal, UserController.deleteUser)
    .post('/user/login', UserController.login);

export default router;
