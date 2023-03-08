import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3002;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

describe('GET route /user', () => {
    it('Should return an array of users', async () => {
        const response = await request(app)
            .get('/user')
            .expect(200);
        expect(response.body[0].name).toEqual('João Castor da Silva');
        expect(response.body[1].name).toEqual('Maria Natalina');
    });
});

let idResponse;
describe('POST route /admin/user', () => {
    it('Should add a new user', async () => {
        const response = await request(app)
            .post('/admin/user')
            .send({
                name: 'Teste Teste',
                email: 'test@test.com.br',
                password: 'test123$',
                cpf: '32145698709',
                phones: ['31998561212', '31989752563'],
                address: {
                    cep: '32017-756',
                    street: 'Teste',
                    number: '001',
                    complement: 'N/P',
                    city: 'Belo Horizonte',
                    state: 'MG'
                }
            })
            .expect(201);
        idResponse = response.body['_id'];    
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/admin/user')
            .send({})
            .expect(500);
    });
});

describe('GET route /user/:id', () => {
    it('Should return an object of a user', async () => {
        const response = await request(app)
            .get(`/user/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Teste Teste');
    });
});

describe('PUT route /admin/user/:id', () => {
    it('Should update information on the selected user', async () => {
        await request(app)
            .put(`/admin/user/${idResponse}`)
            .send({
                name: 'Testando Test',
                password: 'testando123'
            })
            .expect(202);
        const response = await request(app)
            .get(`/user/${idResponse}`)
            .expect(200);
        expect(response.body.name).toEqual('Testando Test');
        expect(response.body.password).toEqual('testando123');
    });
});

describe('DELETE route /admin/user/:id', () => {
    it('Should delete the selected user', async () => {
        await request(app)
            .delete(`/admin/user/${idResponse}`)
            .expect(202);
    });
});
