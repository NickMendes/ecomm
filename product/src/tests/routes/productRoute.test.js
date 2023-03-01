import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3001;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

describe('GET route /product', () => {
    it('Should return an array of products', async () => {
        const response = await request(app)
            .get('/product')
            .expect(200);
        expect(response.body[0].name).toEqual('Notebook Samsung');
        expect(response.body[1].name).toEqual('PlayStation 5');
    });
});

let idResponse;
describe('POST route /admin/product', () => {
    it('Should add a new product', async () => {
        const response = await request(app)
            .post('/admin/product')
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
            .post('/admin/product')
            .send({})
            .expect(400);
    });
});

describe('GET route /product/:id', () => {
    it('Should return an object of a product', async () => {
        const response = await request(app)
            .get(`/product/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('PlayStation 6');
    });
});

describe('PUT route /admin/product/:id', () => {
    it('Should update information on the selected product', async () => {
        await request(app)
            .put(`/admin/product/${idResponse}`)
            .send({
                name: 'Play Station 6',
                unit_price: 10000.00
            })
            .expect(202);
        const response = await request(app)
            .get(`/product/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Play Station 6');
    });
});

describe('DELETE route /admin/product/:id', () => {
    it('Should delete the selected product', async () => {
        await request(app)
            .delete(`/admin/product/${idResponse}`)
            .expect(202);
    });
});
