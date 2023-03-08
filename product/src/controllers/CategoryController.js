import categoryModel from '../models/CategoryModel.js';
import statusCode from '../../enum/statusCode.js';

class CategoryController {
    static getAllCategories = (_req, res) => {
        categoryModel.find((err, category) => {
            res.status(statusCode.OK).json(category);
        });
    };

    static getCategoryById = (req, res) => {
        const id = req.params.id;

        categoryModel.findById(id, (err, category) => {
            if(err) {
                res.status(statusCode.BAD_REQUEST).send({ message: err.message });
            } else {
                res.status(statusCode.OK).send(category);
            }
        });
    };

    static createCategory = (req, res) => {
        let category = new categoryModel(req.body);

        if(!req.body.name) {
            res.status(statusCode.BAD_REQUEST).send({ message: 'Body is Required' });
        } else {
            category.save((err) => {
                if(err) {
                    res.status(statusCode.BAD_REQUEST).send({ message: err.message });
                } else {
                    res.status(statusCode.CREATED).send(category.toJSON());
                }
            });
        }
    };

    static updateCategory = (req, res) => {
        const id = req.params.id;

        categoryModel.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(statusCode.ACCEPTED).send({ message: 'Category updated success' });
            } else {
                res.status(statusCode.BAD_REQUEST).send({ message: err.message });
            }
        });
    };

    static updateCategoryStatus = (req, res) => {
        const id = req.params.id;
        const newStatus = req.body.status;

        if(!newStatus) {
            res.status(statusCode.BAD_REQUEST).send(
                { message: 'Add an status to the body requirement' });
        } else {
            categoryModel.findByIdAndUpdate(id, { $set: { status: newStatus } }, (err) => {
                if(!err) {
                    res.status(statusCode.ACCEPTED).send({ message: 'Category updated success' });
                } else {
                    res.status(statusCode.BAD_REQUEST).send({ message: err.message });
                }
            });
        }
    };

    static deleteCategory = (req, res) => {
        const id = req.params.id;

        categoryModel.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(statusCode.ACCEPTED).send({ message: 'Category deleted success' });
            } else {
                res.status(statusCode.BAD_REQUEST).send({ message: err.message });
            }
        });
    };

}

export default CategoryController;
