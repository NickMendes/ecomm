import { describe, it, expect, jest } from '@jest/globals';
import CupomModel from '../../models/CupomModel.js';

const newCupom = {
    user_info: {
        name: 'João Castor da Silva',
        cpf: '32145698709',
        address: { 
            cep: '32017-756',
            street: 'Rua das Acásias',
            number: '1792',
            complement: 'apto 103',
            city: 'Coronel Fabriciano',
            state: 'MG'
        }
    },
    sale_info: {
        order: [{
            product_name: 'PlayStation 5',
            product_price: 419998,
            product_qty: 1,
            discount:15000
        }],
        total_price: 404998,
    },
    payment_info: {
        name: 'João Castor da Silva',
        card_number: '5502147823651234',
        expiration_date: '2024-10',
        status: 'CRIADO'
    }
};
const newCupomResult = {
    _id: '63d80397cad2fbb2365aed02',
    user_info: {
        name: 'João Castor da Silva',
        cpf: '32145698709',
        address: { 
            cep: '32017-756',
            street: 'Rua das Acásias',
            number: '1792',
            complement: 'apto 103',
            city: 'Coronel Fabriciano',
            state: 'MG'
        }
    },
    sale_info: {
        order: [{
            product_name: 'PlayStation 5',
            product_price: 419998,
            product_qty: 1,
            discount:15000
        }],
        total_price: 404998,
        sale_date: '2023-02-28T11:38:32'
    },
    payment_info: {
        name: 'João Castor da Silva',
        card_number: '5502147823651234',
        expiration_date: '2024-10',
        status: 'CRIADO'
    }
};
describe('Testing Product Model', () => {


    it('Test if instantiate a new cupom', () => {
        const cupom = new CupomModel(newCupom);

        expect(cupom).toEqual(
            expect.objectContaining(cupom)
        );
    });

    it('Test if instance is saved in DB', async () => {
        const cupom = new CupomModel(newCupom);

        cupom.salvar = jest.fn().mockReturnValue(newCupomResult);
      
        const retorno = await cupom.salvar();
    
        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newCupomResult
            }),
        );
    });
});
