import paymentModel from '../models/PaymentModel.js';
import omit from '../helpers/helps.js';

class PaymentController {
    static getAllPayments = (_req, res) => {
        paymentModel.find((err, payment) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                const payments = payment.map((ele) => omit(ele._doc, ['cvv']));
                res.status(200).json(payments);
            }
        });
    };

    static getPaymentById = (req, res) => {
        const id = req.params.id;

        paymentModel.findById(id, (err, payment) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(omit(payment._doc, ['cvv']));
            }
        });
    };

    static createPayment = (req, res) => {
        let payment = new paymentModel({ ...req.body, status: 'CRIADO' });
    
        payment.save((err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(201).json(payment.toJSON());
            }
        });

    };

    static updatePayment = async (req, res) => {
        const id = req.params.id;

        const checkId = await paymentModel.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Payment not found' });
        }

        paymentModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Payment updated success'});
            }
        });
    };

    static deletePayment = async (req, res) => {
        const id = req.params.id;

        const checkId = await paymentModel.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Payment not found' });
        }

        paymentModel.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Payment deleted success'});
            }
        });
    };
}

export default PaymentController;
