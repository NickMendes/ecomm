import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import axios from 'axios';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3005;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let token;
describe('GET route /payment', () => {
    it('Should return an array of payments', async () => {
        const getToken = await axios.post(
            'http://localhost:3002/user/login',
            { email: 'test@test.com.br', password: 'test123$' });
        token = getToken.headers['authorization'];

        const response = await request(app)
            .get('/payment')
            .set('Authorization', token)
            .expect(200);
        expect(response.body[0].name).toEqual('João Castor da Silva');
        expect(response.body[1].card_number).toEqual('5502147823651234');
    });

    it('Response should omit CVV data', async () => {
        const response = await request(app)
            .get('/payment')
            .set('Authorization', token)
            .expect(200);
        response.body.forEach((ele) => {
            expect(ele.cvv).toBeUndefined();
        });
    });
});

let idResponse;
describe('POST route /payment', () => {
    it('Should add a new payment', async () => {
        const response = await request(app)
            .post('/payment')
            .set('Authorization', token)
            .send({
                value: 123.45,
                name: 'Teste',
                card_number: '4196184725653982',
                expiration_date: '2029-09',
                cvv: '987'
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/payment')
            .set('Authorization', token)
            .send({})
            .expect(422);
    });

    it('Should return 401 if token is missing', async () => {
        await request(app)
            .post('/payment')
            .expect(401);
    });

    it('Should return 401 if token is not valid', async () => {
        await request(app)
            .post('/payment')
            .set('Authorization', 'qualquercoisaquenaosejaoauthorizadordeverdade')
            .expect(401);
    });
});

describe('GET route /payment/:id', () => {
    it('Should return an object of a payment', async () => {
        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Teste');
    });

    it('Response should omit CVV data', async () => {
        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.cvv).toBeUndefined();
        
    });
});

describe('PUT route /payment/:id', () => {
    it('Should update information on the selected payment', async () => {
        await request(app)
            .patch(`/payment/${idResponse}`)
            .set('Authorization', token)
            .send({
                name: 'Testando'
            })
            .expect(204);

        const response = await request(app)
            .get(`/payment/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });
});

describe('DELETE route /payment/:id', () => {
    it('Should delete the selected payment', async () => {
        await request(app)
            .delete(`/payment/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
