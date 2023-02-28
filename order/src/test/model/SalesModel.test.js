import { describe, it, expect, jest } from '@jest/globals';
import SaleModel from '../../model/salesModel.js';

describe('Testing Sale Model', () => {
    const newSale = {
        user_info: {
            name: 'Teste',
            cpf: '11111111111'
        },
        delivery_address: {
            cep: '32017-756',
            street: 'Teste',
            number: '100',
            complement: 'N/P'
        },
        order: [{
            product_name: 'Teste',
            product_price: 12000,
            product_qty: 1,
            discount: 150.00
        }],
        total_price: 12000
    };

    it('Test if instantiate a new sale', () => {
        const sale = new SaleModel(newSale);

        expect(sale).toEqual(
            expect.objectContaining(sale)
        );
    });

    it('Test if instance is saved in DB', async () => {
        const sale = new SaleModel(newSale);

        sale.salvar = jest.fn().mockReturnValue({
            _id: '63d80397cad2fbb2365aed02',
            user_info: {
                name: 'Teste',
                cpf: '11111111111'
            },
            delivery_address: {
                cep: '32017-756',
                street: 'Teste',
                number: '100',
                complement: 'N/P'
            },
            order: [{
                product_name: 'Teste',
                product_price: 12000,
                product_qty: 1,
                discount: 150.00
            }],
            total_price: 12000
        });

        const retorno = await sale.salvar();

        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newSale
            })
        );
    });
});