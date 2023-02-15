import salesModel from '../model/salesModel.js';

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

  // Esta gerando um _id para a ordem que tem dentro do sale não sei porque, mas não atrapalha meu código. Olhar depois como tira isso
  static createSale = (req, res) => {
    const saleInfo = req.body;
    const total_price = saleInfo.order.reduce((acc, cur) =>  {
      return acc + ((cur.product_price * cur.product_qty) - cur.discount)
    }, 0);

    let sale = new salesModel({ ...saleInfo, total_price });

    sale.save((err) => {
      if(err) {
        res.status(500).send({ message: err.message });
      } else {
        res.status(201).send(sale.toJSON());
      }
    });
  };

  static updateSale = (req, res) => {
    const id = req.params.id;

    salesModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(200).send({ message: 'Sale updated success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteSale = (req, res) => {
    const id = req.params.id;

    salesModel.findByIdAndDelete(id, (err) => {
      if(!err) {
        res.status(200).send({ message: 'Sale deleted success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
};

export default SaleController;
