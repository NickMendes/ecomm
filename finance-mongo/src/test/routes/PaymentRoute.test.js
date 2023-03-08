import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3005;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

describe('GET route /payment', () => {
    it('Should return an array of payments', async () => {
        const response = await request(app)
            .get('/payment')
            .expect(200);
        expect(response.body[0].name).toEqual('João Castor da Silva');
        expect(response.body[1].card_number).toEqual('5502147823651234');
    });

    it('Response should omit CVV data', async () => {
        const response = await request(app)
            .get('/payment')
            .expect(200);
        response.body.forEach((ele) => {
            expect(ele.cvv).toBeUndefined();
        });
    });
});

let idResponse;
describe('POST route /admin/payment', () => {
    it('Should add a new payment', async () => {
        const response = await request(app)
            .post('/admin/payment')
            .send({
                value: 123.45,
                name: 'Teste',
                card_number: '1234123412341234',
                expiration_date: '2029-09',
                cvv: '987'
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/admin/payment')
            .send({})
            .expect(500);
    });
});

describe('GET route /payment/:id', () => {
    it('Should return an object of a payment', async () => {
        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Teste');
    });

    it('Response should omit CVV data', async () => {
        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .expect(200);
        expect(response.body.cvv).toBeUndefined();
        
    });
});

describe('PUT route /admin/payment/:id', () => {
    it('Should update information on the selected payment', async () => {
        await request(app)
            .patch(`/admin/payment/${idResponse}`)
            .send({
                name: 'Testando'
            })
            .expect(202);
        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });
});

describe('DELETE route /admin/payment/:id', () => {
    it('Should delete the selected payment', async () => {
        await request(app)
            .delete(`/admin/payment/${idResponse}`)
            .expect(202);
    });
});
