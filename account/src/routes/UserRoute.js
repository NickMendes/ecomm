import express from 'express';
import UserController from '../controllers/UserController.js';

const router = express.Router();

router
    .get('/user', UserController.getAllUsers)
    .get('/user/:id', UserController.getUserById)
    .post('/admin/user', UserController.createUser)
    .put('/admin/user/:id', UserController.updateUser)
    .delete('/admin/user/:id', UserController.deleteUser);

export default router;
