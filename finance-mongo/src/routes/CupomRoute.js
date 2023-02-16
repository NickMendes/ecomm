import express from 'express';
import CupomController from '../controllers/CupomController.js';

const router = express.Router();

router
  .get('/cupom', CupomController.getAllCupoms)
  .get('/cupom/:id', CupomController.getCupomById)
  .post('/admin/cupom', CupomController.createCupom);

export default router;
