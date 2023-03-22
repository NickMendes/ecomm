import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import axios from 'axios';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3001;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let token;
describe('GET route /product', () => {
    it('Should return an array of products', async () => {
        const getToken = await axios.post(
            'http://localhost:3002/user/login',
            { email: 'joão@castor.com.br', password: 'joao123$' });
        token = getToken.headers['authorization'];

        const response = await request(app)
            .get('/product')
            .expect(200);
        expect(response.body[0].name).toEqual('Notebook Samsung');
        expect(response.body[1].name).toEqual('PlayStation 5');
    });
});

let idResponse;
describe('POST route /product', () => {
    it('Should add a new product', async () => {
        const response = await request(app)
            .post('/product')
            .set('Authorization', token)
            .send({
                name: 'PlayStation 6',
                description: 'Sony new generation console',
                slug: 'play-station-6',
                unit_price: 9199.98,
                category_id: '63ee842d0d94cab2358629f4',
                storage_qty: 8
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/product')
            .set('Authorization', token)
            .send({})
            .expect(422);
    });

    it('Should return 401 if token is missing', async () => {
        await request(app)
            .post('/categories')
            .expect(401);
    });

    it('Should return 401 if token is not valid', async () => {
        await request(app)
            .post('/categories')
            .set('Authorization', 'qualquercoisaquenaosejaoauthorizadordeverdade')
            .expect(401);
    });
});

describe('GET route /product/:id', () => {
    it('Should return an object of a product', async () => {
        const response = await request(app)
            .get(`/product/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('PlayStation 6');
    });
});

describe('PUT route /product/:id', () => {
    it('Should update information on the selected product', async () => {
        await request(app)
            .put(`/product/${idResponse}`)
            .set('Authorization', token)
            .send({
                name: 'Play Station 6',
                unit_price: 10000.00
            })
            .expect(204);
        const response = await request(app)
            .get(`/product/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Play Station 6');
    });
});

describe('DELETE route /product/:id', () => {
    it('Should delete the selected product', async () => {
        await request(app)
            .delete(`/product/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
