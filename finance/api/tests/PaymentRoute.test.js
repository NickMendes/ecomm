const { describe, it, beforeEach, afterEach, expect } = require('@jest/globals');
const request = require('supertest');
const api = require('../../api/api.js');

let server;
beforeEach(() => {
    const PORT = 3003;
    server = api.listen(PORT);
});

afterEach(() => {
    server.close();
});

let idResponse;
describe('POST route /payments', () => {
    it('Should add a new payment', async () => {
        const response = await request(api)
            .post('/payments')
            .send({
                value: 160.00,
                name: 'Testanto',
                card_number: '4745474100045722',
                expiration_date: '2029-07',
                cvv: '598'
            })
            .expect(201);
        idResponse = response.body.id;
    });
    it('Should return error if body is empty', async () => {
        await request(api)
            .post('/payments')
            .send({})
            .expect(500);
    });
});

describe('PATCH route /payments/:id', () => {
    it('Should update the status on the payment', async () => {
        await request(api)
            .patch(`/payments/${idResponse}`)
            .send({
                status: 'CONFIRMADO',
                address: {
                    cep: '32017-756',
                    city: 'teste',
                    state: 'teste'
                },
                cpf: '13911784678',
                sale: {
                    product: 'Teste Vendido',
                    quantity: 1
                }
            })
            .expect(201);
        
        const response = await request(api)
            .get(`/payments/${idResponse}`)
            .expect(200);
        expect(response.body.status).toEqual('CONFIRMADO');
    });
});

describe('DELETE route /payments/:id', () => {
    it('Should delete the selected payment', async () => {
        await request(api)
            .delete(`/payments/${idResponse}`)
            .expect(202);
    });
});
