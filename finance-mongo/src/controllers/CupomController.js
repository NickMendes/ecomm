import cupomModel from '../models/CupomModel.js';
import axios from 'axios';
import { omit } from '../../../helpers/helps.js';
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

  static getCupomById = (req, res) => {
    const id = req.params.id;

    cupomModel.findById(id)
      .populate('payment_id')
      .exec((err, cupom) => {
        if(!err) {
          res.status(200).json(cupom);
        } else {
          res.status(400).send({ message: err.message });
        }
      });
  };

  static createCupom = async (req, res) => {
    const ids = req.body;

    try {
      const userData = await axios.get(`http://localhost:3002/user/${ids.user_id}`);
      const user_info = omit(userData.data, ['_id', 'email', 'password', 'phones', 'creation_date']);

      const saleData = await axios.get(`http://localhost:3004/sale/${ids.sale_id}`);
      const sale_info = omit(saleData.data, ['_id', 'delivery_address']);

      const paymentData = await axios.get(`http://localhost:3005/payment/${ids.payment_id}`);
      const payment_info = omit(paymentData.data, ['_id', 'cvv', 'value']);

      const cupomInfo = { user_info, sale_info, payment_info };

      let cupom = new cupomModel(cupomInfo);

      cupom.save((err) => {
        if(!err) {
          res.status(200).json(cupom);
        } else {
          res.status(400).send({ message: err.message });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export default CupomController;
