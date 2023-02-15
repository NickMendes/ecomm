import salesModel from '../model/salesModel.js';

class SaleController {
  static getAllSales = (_req, res) => {
    salesModel.find((err, sale) => {
      res.status(200).json(sale);
    });
  };
};

export default SaleController;
