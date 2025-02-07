import categoryModel from '../models/CategoryModel.js';

class CategoryController {
    static getAllCategories = (_req, res) => {
        categoryModel.find((err, category) => {
            if(err) {
                res.status(500).json({ message: err.message });
            } else {
                res.status(200).json(category);
            }
        });
    };

    static getCategoryById = (req, res) => {
        const id = req.params.id;

        categoryModel.findById(id, (err, category) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).send(category);
            }
        });
    };

    static createCategory = (req, res) => {
        let category = new categoryModel(req.body);

        category.save((err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(201).send(category.toJSON());
            }
        });
    };

    static updateCategory = async (req, res) => {
        const id = req.params.id;

        const checkId = await categoryModel.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Category not found' });
        }

        categoryModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).end();
            }
        });
    };

    static updateCategoryStatus = async (req, res) => {
        const id = req.params.id;
        const newStatus = req.body.status;

        if(!newStatus) {
            res.status(400).send(
                { message: 'Add an status to the body requirement' });
        } else {
            const checkId = await categoryModel.findById(id);
            if (!checkId) {
                res.status(404).send({ message: 'Category not found' });
            }

            categoryModel.findByIdAndUpdate(id, { $set: { status: newStatus } }, (err) => {
                if(err) {
                    res.status(400).send({ message: err.message });
                } else {
                    res.status(204).end();
                }
            });
        }
    };

    static deleteCategory = async (req, res) => {
        const id = req.params.id;

        const checkId = await categoryModel.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Category not found' });
        }

        categoryModel.findByIdAndDelete(id, (err) => {
            if(err){
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).end();
            }
        });
    };

}

export default CategoryController;
