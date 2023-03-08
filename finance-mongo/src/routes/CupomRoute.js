import express from 'express';
import CupomController from '../controllers/CupomController.js';

const router = express.Router();

router
    .get('/cupom', CupomController.getAllCupoms)
    .get('/cupom/:id', CupomController.getCupomById)
    .post('/admin/cupom', CupomController.createCupom)
    .patch('/admin/cupom/:id', CupomController.updateCupom)
    .delete('/admin/cupom/:id', CupomController.deleteCupom);

export default router;
