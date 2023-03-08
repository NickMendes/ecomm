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

describe('GET route /categories', () => {
    it('Should return an array of categories', async () => {
        const response = await request(app)
            .get('/categories')
            .expect(200);
        expect(response.body[0].name).toEqual('Informática');
        expect(response.body[4].name).toEqual('Livros');
    });
});

let idResponse;
describe('POST route /admin/categories', () => {
    it('Should add a new categories', async () => {
        const response = await request(app)
            .post('/admin/categories')
            .send({
                name: 'Teste',
                status: 'Inativa',
            })
            .expect(201);
        idResponse = response.body['_id'];
    });
    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/admin/categories')
            .send({})
            .expect(400);
    });
});

describe('GET route /categories/:id', () => {
    it('Should return an object of a categories', async () => {
        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Teste');
    });
});

describe('PUT route /admin/categories/:id', () => {
    it('Should update information on the selected category', async () => {
        await request(app)
            .put(`/admin/categories/${idResponse}`)
            .send({
                name: 'Testando'
            })
            .expect(202);
        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });
    it('Should return error if body is empty', async () => {
        await request(app)
            .put(`/admin/categories/${idResponse}`)
            .send({})
            .expect(500);
    });
});

describe('PATCH route /admin/categories/:id', () => {
    it('Should update status on the selected categories', async () => {
        await request(app)
            .patch(`/admin/categories/${idResponse}`)
            .send({
                status: 'Ativa'
            })
            .expect(202);
        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });
    it('Should return error if body is empty', async () => {
        await request(app)
            .patch(`/admin/categories/${idResponse}`)
            .send({})
            .expect(400);
    });
});


describe('DELETE route /admin/categories/:id', () => {
    it('Should delete the selected categories', async () => {
        await request(app)
            .delete(`/admin/categories/${idResponse}`)
            .expect(202);
    });
});
