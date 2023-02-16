import express from 'express';
import CupomController from '../controllers/CupomController.js';

const router = express.Router();

router
  .get('/cupoms', CupomController.getAllCupoms);

export default router;
