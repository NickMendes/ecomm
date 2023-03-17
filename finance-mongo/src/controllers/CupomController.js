import cupomModel from '../models/CupomModel.js';
import axios from 'axios';
import omit from '../helpers/helps.js';

class CupomController {
    static getAllCupoms = (_req, res) => {
        cupomModel.find((err, cupom) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(200).json(cupom);
            }
        });
    };

    static getCupomById = (req, res) => {
        const id = req.params.id;

        cupomModel.findById(id, (err, cupom) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).json(cupom);
            }
        });
    };

    static createCupom = async (req, res) => {
        const ids = req.body;
        const { authorization } = req.headers;

        try {
            const userData = await axios.get(`http://localhost:3002/user/${ids.user_id}`,
                { headers: { 'Authorization': authorization } });
            const user_info = omit(userData.data, 
                ['_id', 'email', 'password', 'phones', 'creation_date']);

            const saleData = await axios.get(`http://localhost:3004/sale/${ids.sale_id}`,
                { headers: { 'Authorization': authorization } });
            const sale_info = omit(saleData.data, ['_id', 'delivery_address']);

            const paymentData = await axios.get(`http://localhost:3005/payment/${ids.payment_id}`,
                { headers: { 'Authorization': authorization } });
            const payment_info = omit(paymentData.data, ['_id', 'cvv', 'value']);

            const cupomInfo = { user_info, sale_info, payment_info };

            let cupom = new cupomModel(cupomInfo);

            cupom.save((err) => {
                if(err) {
                    res.status(400).send({ message: err.message });
                } else {
                    res.status(201).json(cupom);
                }
            });
        } catch (error) {
            res.status(400).send({ message: error.message });

        }
    };

    static updateCupom = (req, res) => {
        const id = req.params.id;

        cupomModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Cupom updated success'});
            }
        });
    };

    static deleteCupom = (req, res) => {
        const id = req.params.id;

        cupomModel.findByIdAndDelete(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Cupom deleted success'});
            }
        });
    };
}

export default CupomController;
