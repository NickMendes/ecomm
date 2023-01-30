import category from "../models/CagetogyModel.js";

class CateogryController {
  static getAllCategories = (_req, res) => {
    category.find((err, category) => {
      res.status(200).json(category)
    });
  };

  static getCategoryById = (req, res) => {
    const id = req.params.id;

    category.findById(id, (err, category) => {
      if(err) {
        res.status(400).send({ message: `${err.message} - Category ID not identified` })
      } else {
        res.status(200).send(category);
      }
    });
  };

  static postCategory = (req, res) => {
    let category = new category(req.body);

    category.save((err) => {
      if(err) {
        res.status(500).send({ essage: `${err.message} - Fail to add Category` })
      } else {
        res.status(201).send(category.toJSON())
      }
    });
  };

  static putCategory = (req, res) => {
    const id = req.params.id;

    category.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(200).send({ message: 'Category updated success' })
      } else {
        res.status(500).send({ message: err.message })
      }
    });
  };

  static deleteCategory = (req, res) => {
    const id = req.params.id;

    category.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({ message: 'Category deleted success' })
      } else {
        res.status(500).send({ message: err.message })
      }
    });
  };

}

export default CateogryController;
