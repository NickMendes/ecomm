import products from '../models/ProductModel.js';

class ProductController {
    static getAllProducts = (_req, res) => {
        products.find()
            .populate('category_id')
            .exec((err, products) => {
                if(err) {
                    res.status(500).json({ message: err.message });
                } else {
                    res.status(200).json(products);
                }
            });
    };

    static getProductById = (req, res) => {
        const id = req.params.id;

        products.findById(id)
            .populate('category_id') 
            .exec((err, product) => {
                if(err) {
                    res.status(500).send({ message: err.message });
                } else if(!product) {
                    res.status(404).send({ message: 'Product Not Found' });
                } else {
                    res.status(200).json(product);
                }
            });
    };

    static createProduct = (req, res) => {
        let product = new products(req.body);

        product.save((err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(201).json(product.toJSON());
            }
        });
        
    };

    static updateProduct = async (req, res) => {
        const id = req.params.id;

        const checkId = await products.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Product not found' });
        }

        products.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Product updated success'});
            }
        });
    };

    static deleteProduct = async (req, res) => {
        const id = req.params.id;

        const checkId = await products.findById(id);
        if (!checkId) {
            res.status(404).send({ message: 'Product not found' });
        }

        products.findByIdAndDelete(id, (err) => {
            if(err) {
                res.status(400).send({ message: err.message });
            } else {
                res.status(204).json({ message: 'Product deleted success'});
            }
        });
    };

    static getProductsByCategory = (req, res) => {
        const category = req.query.category;

        products.find({'category': category}, {}, (err, products) => {
            if(err) {
                res.status(404).send({ message: err.message });
            } else {
                res.status(200).send(products);
            }
        });
    };
}

export default ProductController;
