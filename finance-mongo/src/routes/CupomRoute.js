import express from 'express';
import CupomController from '../controllers/CupomController.js';
import tokenVal from '../middleware/authorizationMW.js';
// import validadeCupom from '../middleware/cupomMW.js';

const router = express.Router();

router
  .get('/cupom', tokenVal, CupomController.getAllCupoms)
  .get('/cupom/:id', tokenVal, CupomController.getCupomById)
  .post('/admin/cupom', tokenVal, CupomController.createCupom)
  .patch('/admin/cupom/:id', tokenVal, CupomController.updateCupom)
  .delete('/admin/cupom/:id', tokenVal, CupomController.deleteCupom);

export default router;
