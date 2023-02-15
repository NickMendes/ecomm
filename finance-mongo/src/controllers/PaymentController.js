import paymentModel from '../models/PaymentModel.js';

class PaymentController {
  static getAllPayments = (_req, res) => {
    paymentModel.find((err, payment) => {
      if(!err) {
        res.status(200).json(payment);
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static getPaymentById = (req, res) => {
    const id = req.params.id;

    paymentModel.findById(id, (err, payment) => {
        if(err) {
          res.status(400).send({ message: err.message });
        } else {
          res.status(200).json(payment);
        }
      });
  };

  static createPayment = (req, res) => {
    let payment = new paymentModel({ ...req.body, status: "CRIADO" });
    
    payment.save((err) => {
      if(err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).json(payment.toJSON());
      }
    });

  };

  static updatePayment = (req, res) => {
    const id = req.params.id;

    paymentModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(200).json({ message: 'Payment updated success'});
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deletePayment = (req, res) => {
    const id = req.params.id;

    paymentModel.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).json({ message: 'Payment deleted success'});
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default PaymentController;
