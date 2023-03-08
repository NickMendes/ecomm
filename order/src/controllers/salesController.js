import salesModel from '../model/salesModel.js';
import axios from 'axios';
import omit from '../helpers/helps.js';

class SaleController {
    static getAllSales = (_req, res) => {
        salesModel.find((err, sale) => {
            if(!err) {
                res.status(200).json(sale);
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static getSaleById = (req, res) => {
        const id = req.params.id;

        salesModel.findById(id, (err, sale) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(sale);
            }
        });
    };

    static createSale = async (req, res) => {
        const saleInfo = req.body;

        try {
            const userData = await axios.get(`http://localhost:3002/user/${saleInfo.user_id}`);
            const user_info = { name: userData.data.name, cpf: userData.data.cpf };
      
            const orderInfo = await saleInfo.order.map(async (product) => {
                const productData =  await axios.get(
                    `http://localhost:3001/product/${product.product_id}`);
                if (!productData) {
                    res.status(404).send({ message: 'A product was not found' });
                } else {
                    const newOrder = {
                        product_name: productData.data.name,
                        product_price: productData.data.unit_price,
                        product_qty: product.product_qty,
                        discount: product.discount
                    };
                    return newOrder;
                }
            });

            const orderInfoPromise = await Promise.all(orderInfo);
      
            const total_price = orderInfoPromise.reduce((acc, cur) =>  {
                return acc + (cur.product_price.$numberDecimal * cur.product_qty) - cur.discount;
            }, 0).toFixed(2);
            console.log(total_price);

            const saleInfoRefactor = omit(saleInfo, ['user_id', 'order']);

            let sale = new salesModel(
                { ...saleInfoRefactor, user_info, total_price, order: orderInfoPromise });
  
            sale.save((err) => {
                if(err) {
                    res.status(500).send({ message: err.message });
                } else {
                    res.status(201).send(sale.toJSON());
                }
            });
        } catch (error) {
            console.error(error);
        }
    };

    static updateSale = (req, res) => {
        const id = req.params.id;

        salesModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(202).send({ message: 'Sale updated success' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static deleteSale = (req, res) => {
        const id = req.params.id;

        salesModel.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(202).send({ message: 'Sale deleted success' });
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };
}

export default SaleController;
