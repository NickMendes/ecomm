import categoryModel from "../models/CagetogyModel.js";

class CategoryController {
  static getAllCategories = (_req, res) => {
    categoryModel.find((err, category) => {
      res.status(200).json(category);
    });
  };

  static getCategoryById = (req, res) => {
    const id = req.params.id;

    categoryModel.findById(id, (err, category) => {
      if(err) {
        res.status(400).send({ message: err.message });
        console.log("error", category);
      } else {
        res.status(200).send(category);
        console.log("correto", category);
      }
    });
  };

  static postCategory = (req, res) => {
    let category = new categoryModel(req.body);

    category.save((err) => {
      if(err) {
        res.status(400).send({ message: err.message });
      } else {
        res.status(201).send(category.toJSON());
      }
    });
  };

  static putCategory = (req, res) => {
    const id = req.params.id;

    categoryModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if(!err) {
        res.status(200).send({ message: 'Category updated success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static patchCategory = (req, res) => {
    const id = req.params.id;
    const newStatus = req.body.status;

    if(!newStatus) {
      res.status(400).send({ message: 'Add an status to the body requirement' })
    } else {
      categoryModel.findByIdAndUpdate(id, { $set: { status: newStatus } }, (err) => {
        if(!err) {
          res.status(200).send({ message: 'Category updated success' });
        } else {
          res.status(500).send({ message: err.message });
        }
      });
    }
  };

  static deleteCategory = (req, res) => {
    const id = req.params.id;

    categoryModel.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({ message: 'Category deleted success' });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

}

export default CategoryController;
