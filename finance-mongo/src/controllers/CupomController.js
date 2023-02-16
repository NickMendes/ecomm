import cupomModel from '../models/CupomModel.js';

class CupomController {
  static getAllCupoms = (_req, res) => {
    cupomModel.find()
      .populate('payment_id')
      .exec((err, cupom) => {
        if(!err) {
          res.status(200).json(cupom);
        } else {
          res.status(400).send({ message: err.message });
        }
      });
  };
}

export default CupomController;
