import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3004;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

describe('GET route /sale', () => {
    it('Should return an array of sales', async () => {
        const response = await request(app)
            .get('/sale')
            .expect(200);
        expect(response.body[0].user_info.name).toEqual('João Castor da Silva');
    });
});

let idResponse;
describe('POST route /admin/sale', () => {
    it('Should add a new sale', async () => {
        const response = await request(app)
            .post('/admin/sale')
            .send({
                user_id: '63ee835b5ab79d1681d8a05c',
                delivery_address: {
                    cep: '32017-756',
                    street: 'Rua das Acásias',
                    number: 1792,
                    complement: 'apto 103'
                },
                order: [{
                    product_id: '63ee84970d94cab2358629f7',
                    product_qty: 1,
                    discount: 0
                }]  
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/admin/product')
            .send({})
            .expect(400);
    });
});

describe('GET route /sale/:id', () => {
    it('Should return an object of a sale', async () => {
        const response = await request(app)
            .get(`/sale/${idResponse}`)
            .expect(200);
        expect(response.body.user_info.name).toEqual('João Castor da Silva');
    });
});

describe('PUT route /admin/sale/:id', () => {
    it('Should update information on the selected sale', async () => {
        await request(app)
            .put(`/admin/sale/${idResponse}`)
            .send({
                cep: '123569-587'
            })
            .expect(202);
        const response = await request(app)
            .get(`/sale/${idResponse}`)
            .expect(200);
        expect(response.body.delivery_address.cep).toEqual('123569-587');
    });
});

describe('DELETE route /admin/sale/:id', () => {
    it('Should delete the selected sale', async () => {
        await request(app)
            .delete(`/admin/sale/${idResponse}`)
            .expect(202);
    });
});
