import products from '../models/ProductModel.js';
import status from '../../enum/statusCode.js';

class ProductController {
    static getAllProducts = (_req, res) => {
        products.find()
            .populate('category_id')
            .exec((err, products) => {
                res.status(status.OK).json(products);
            });
    };

    static getProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id)
            .populate('category_id') 
            .exec((err, product) => {
                if(err) {
                    res.status(status.SERVER_ERROR).send({ message: err.message });
                } else if(!product) {
                    res.status(status.NOT_FOUND).send({ message: 'Product Not Found' });
                } else {
                    res.status(status.OK).json(product);
                }
            });
    };

    static createProduct = (req, res) => {
        let product = new products(req.body);
        console.log(req.body);

        if(!req.body.name) {
            res.status(status.BAD_REQUEST).send({ message: 'Body is Requested' });
        } else {
            product.save((err) => {
                if(err) {
                    res.status(status.SERVER_ERROR).send({ message: err.message });
                } else {
                    res.status(status.CREATED).json(product.toJSON());
                }
            });
        }
    };

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(status.ACCEPTED).json({ message: 'Product updated success'});
            } else {
                res.status(status.SERVER_ERROR).send({ message: err.message });
            }
        });
    };

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(status.ACCEPTED).json({ message: 'Product deleted success'});
            } else {
                res.status(status.SERVER_ERROR).send({ message: err.message });
            }
        });
    };

    static getProductsByCategory = (req, res) => {
        const category = req.query.category;

        products.find({'category': category}, {}, (err, products) => {
            if(err) {
                res.status(status.SERVER_ERROR).send({ message: err.message });
            } else {
                res.status(status.OK).send(products);
            }
        });
    };
}

export default ProductController;
