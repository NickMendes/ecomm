import products from '../models/ProductModel.js';

class ProductController {
    static getAllProducts = (_req, res) => {
        products.find()
            .populate('category_id')
            .exec((err, products) => {
                res.status(200).json(products);
            });
    };

    static getProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id)
            .populate('category_id') 
            .exec((err, product) => {
                if(err) {
                    res.status(400).send({ message: err.message });
                } else {
                    res.status(200).json(product);
                }
            });
    };

    static createProduct = (req, res) => {
        let product = new products(req.body);
    
        product.save((err) => {
            if(err) {
                res.status(500).send({ message: err.message });
            } else {
                res.status(201).json(product.toJSON());
            }
        });

    };

    static updateProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(!err) {
                res.status(202).json({ message: 'Product updated success'});
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static deleteProduct = (req, res) => {
        const id = req.params.id;

        products.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(202).json({ message: 'Product deleted success'});
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    };

    static getProductsByCategory = (req, res) => {
        const category = req.query.category;

        products.find({'category': category}, {}, (err, products) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(200).send(products);
            }
        });
    };
}

export default ProductController;
