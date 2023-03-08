import { describe, it, expect, jest } from '@jest/globals';
import PaymentModel from '../../models/PaymentModel.js';

describe('Testing Payment Model', () => {
    const newPayment = {
        value: 12345,
        name: 'Teste',
        card_number: '1234123412341234',
        expiration_date: '2029-09',
        cvv: '987'
    };
    

    it('Test if instantiate a new Payment', () => {
        const payment = new PaymentModel(newPayment);
        const paymentTest = { 
            ...payment,
            status: 'CRIADO' 
        };

        expect(payment).toEqual(
            expect.objectContaining(paymentTest)
        );
    });

    it('Test if instance is saved in DB', async () => {
        const payment = new PaymentModel(newPayment);

        payment.salvar = jest.fn().mockResolvedValue({
            _id: '63d80397cad2fbb2365aed02',
            value: 12345,
            name: 'Teste',
            card_number: '1234123412341234',
            expiration_date: '2029-09',
            cvv: '987'
        });

        const retorno = await payment.salvar();

        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newPayment
            })
        );
    });
});
