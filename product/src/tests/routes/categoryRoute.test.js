import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import axios from 'axios';
import app from '../../app.js';

let server;
beforeEach(async () => {
    const PORT = 3001;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let token;
describe('GET route /categories', () => {
    it('Should return an array of categories', async () => {
        const getToken = await axios.post(
            'http://localhost:3002/user/login',
            { email: 'joão@castor.com.br', password: 'joao123$' });
        token = getToken.headers['authorization'];

        const response = await request(app)
            .get('/categories')
            .expect(200);
        expect(response.body[0].name).toEqual('Informática');
        expect(response.body[4].name).toEqual('Livros');
    });
});


let idResponse;
describe('POST route /categories', () => {
    it('Should add a new categories', async () => {
        const response = await request(app)
            .post('/categories')
            .set('Authorization', token)
            .send({
                name: 'Teste',
                status: 'Inativa',
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/categories')
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

describe('GET route /categories/:id', () => {
    it('Should return an object of a categories', async () => {
        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Teste');
    });
});

describe('PUT route /categories/:id', () => {
    it('Should update information on the selected category', async () => {
        await request(app)
            .put(`/categories/${idResponse}`)
            .set('Authorization', token)
            .send({
                name: 'Testando'
            })
            .expect(204);

        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .put(`/categories/${idResponse}`)
            .set('Authorization', token)
            .send({})
            .expect(422);
    });
});

describe('PATCH route /categories/:id', () => {
    it('Should update status on the selected categories', async () => {
        await request(app)
            .patch(`/categories/${idResponse}`)
            .set('Authorization', token)
            .send({
                status: 'Ativa'
            })
            .expect(204);

        const response = await request(app)
            .get(`/categories/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Testando');
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .patch(`/categories/${idResponse}`)
            .set('Authorization', token)
            .send({})
            .expect(400);
    });
});


describe('DELETE route /categories/:id', () => {
    it('Should delete the selected categories', async () => {
        await request(app)
            .delete(`/categories/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
