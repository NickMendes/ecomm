import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import axios from 'axios';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3004;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let token;
describe('GET route /sale', () => {
    it('Should return an array of sales', async () => {
        const getToken = await axios.post(
            'http://localhost:3002/user/login',
            { email: 'test@test.com.br', password: 'test123$' });
        token = getToken.headers['authorization'];

        const response = await request(app)
            .get('/sale')
            .set('Authorization', token)
            .expect(200);
        expect(response.body[0].user_info.name).toEqual('João Castor da Silva');
    });
});

let idResponse;
describe('POST route /sale', () => {
    it('Should add a new sale', async () => {
        const response = await request(app)
            .post('/sale')
            .set('Authorization', token)
            .send({
                user_id: '64078151aa777592686a3a90',
                delivery_address: {
                    cep: '32017-756',
                    street: 'Rua das Acásias',
                    number: '1792',
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
            .post('/sale')
            .set('Authorization', token)
            .send({})
            .expect(422);
    });

    it('Should return 401 if token is missing', async () => {
        await request(app)
            .post('/sale')
            .expect(401);
    });

    it('Should return 401 if token is not valid', async () => {
        await request(app)
            .post('/sale')
            .set('Authorization', 'qualquercoisaquenaosejaoauthorizadordeverdade')
            .expect(401);
    });
});

describe('GET route /sale/:id', () => {
    it('Should return an object of a sale', async () => {
        const response = await request(app)
            .get(`/sale/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.user_info.name).toEqual('João Castor da Silva');
    });
});

describe('PATCH route /sale/:id', () => {
    it('Should update information on the selected sale', async () => {
        await request(app)
            .patch(`/sale/${idResponse}`)
            .set('Authorization', token)
            .send({
                delivery_address: {
                    cep: '12356-587',
                    street: 'Rua das Acásias',
                    number: '1792',
                    complement: 'apto 103'
                }
            })
            .expect(204);
        
        const response = await request(app)
            .get(`/sale/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.delivery_address.cep).toEqual('12356-587');
    });
});

describe('DELETE route /sale/:id', () => {
    it('Should delete the selected sale', async () => {
        await request(app)
            .delete(`/sale/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
