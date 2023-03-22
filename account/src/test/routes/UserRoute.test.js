import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(async () => {
    const PORT = 3002;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

let token;
describe('POST login route /user/login', () => {
    it('Should return 204 and set header with token', async () => {
        const response = await request(app)
            .post('/user/login')
            .send({
                email: 'joão@castor.com.br',
                password: 'joao123$'
            })
            .expect(204);
        token = response.headers.authorization;
    });
});

describe('GET route /user', () => {
    it('Should return an array of users', async () => {
        const response = await request(app)
            .get('/user')
            .set('Authorization', token)
            .expect(200);
        expect(response.body[0].name).toEqual('João Castor da Silva');
        expect(response.body[1].name).toEqual('João Castor da Silva');
    });

    it('Should return 401 if token is missing', async () => {
        await request(app)
            .get('/user')
            .expect(401);
    });

    it('Should return 401 if token is not valid', async () => {
        await request(app)
            .get('/user')
            .set('Authorization', 'qualquercoisaquenaosejaoauthorizadordeverdade')
            .expect(401);
    });
});

let idResponse;
describe('POST route /admin/user', () => {
    it('Should add a new user', async () => {
        const response = await request(app)
            .post('/user')
            .set('Authorization', token)
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
            .post('/user')
            .set('Authorization', token)
            .send({})
            .expect(422);
    });
});

describe('GET route /user/:id', () => {
    it('Should return an object of a user', async () => {
        const response = await request(app)
            .get(`/user/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Teste Teste');
    });
});

describe('PUT route /admin/user/:id', () => {
    it('Should update information on the selected user', async () => {
        await request(app)
            .put(`/user/${idResponse}`)
            .set('Authorization', token)
            .send({
                name: 'Testando Test',
                password: 'testando123'
            })
            .expect(204);

        const response = await request(app)
            .get(`/user/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.name).toEqual('Testando Test');
        expect(response.body.password).toEqual('testando123');
    });
});

describe('DELETE route /admin/user/:id', () => {
    it('Should delete the selected user', async () => {
        await request(app)
            .delete(`/user/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
