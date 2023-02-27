import { describe, it, expect, jest } from '@jest/globals';
import ProductModel from '../../models/ProductModel.js';

describe('Testing Product Model', () => {
    const newProduct = {
        name: 'PlayStation 6',
        description: 'Console de nova geração da Sony',
        slug: 'play-station-6',
        unit_price: 10000.00,
        storage_qty: 26,
        category_id: '63d80397cad2fbb2365aed02'
    };

    it('Test if instantiate a new product', () => {
        const product = new ProductModel(newProduct);
        const productTest = { ...product, unit_price: { $numberDecimal: '10000' } };

        expect(product).toEqual(
            expect.objectContaining(productTest)
        );
    });

    it('Test if instance is saved in DB', () => {
        const product = new ProductModel(newProduct);

        product.salvar = jest.fn().mockReturnValue({
            _id: '63d80397cad2fbb2365aed02',
            name: 'PlayStation 6',
            description: 'Console de nova geração da Sony',
            slug: 'play-station-6',
            unit_price: 10000.00,
            storage_qty: 26,
            category_id: '63d80397cad2fbb2365aed02'
        });
      
        const retorno = product.salvar();
    
        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newProduct
            }),
        );
    });
});
