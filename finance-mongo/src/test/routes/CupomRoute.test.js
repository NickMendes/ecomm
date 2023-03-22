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
describe('GET route /cupom', () => {
    it('Should return an array of payments', async () => {
        const getToken = await axios.post(
            'http://localhost:3002/user/login',
            { email: 'test@test.com.br', password: 'test123$' });
        token = getToken.headers['authorization'];

        const response = await request(app)
            .get('/cupom')
            .set('Authorization', token)
            .expect(200);
        expect(response.body[0].user_info.name).toEqual('João Castor da Silva');
        expect(response.body[0].payment_info.card_number).toEqual('5502147823651234');
    });
});

let idResponse;
describe('POST route /cupom', () => {
    it('Should add a new cupom', async () => {
        const response = await request(app)
            .post('/cupom')
            .set('Authorization', token)
            .send({
                user_id: '6414801a5f29f099c4053371',
                sale_id: '641492d82845189b7098748b',
                payment_id: '63ee91b907d8a0a334f1d3bc'
            })
            .expect(201);
        idResponse = response.body['_id'];
    });

    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/cupom')
            .set('Authorization', token)
            .send({})
            .expect(422);
    });

    it('Should return 401 if token is missing', async () => {
        await request(app)
            .post('/cupom')
            .expect(401);
    });

    it('Should return 401 if token is not valid', async () => {
        await request(app)
            .post('/cupom')
            .set('Authorization', 'qualquercoisaquenaosejaoauthorizadordeverdade')
            .expect(401);
    });
});

describe('GET route /cupom/:id', () => {
    it('Should return an object of a cupom', async () => {
        const response = await request(app)
            .get(`/cupom/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.user_info.name).toEqual('Adminstrador Gerador Token');
    });
});

describe('PATCH route /cupom/:id', () => {
    it('Should update information on the selected cupom', async () => {
        await request(app)
            .patch(`/cupom/${idResponse}`)
            .set('Authorization', token)
            .send({
                user_info: {
                    name: 'Testando',
                    cpf: '00000000001'
                }
            })
            .expect(204);

        const response = await request(app)
            .get(`/cupom/${idResponse}`)
            .set('Authorization', token)
            .expect(200);
        expect(response.body.user_info.name).toEqual('Testando');
        expect(response.body.user_info.cpf).toEqual('00000000001');
    });
});

describe('DELETE route /cupom/:id', () => {
    it('Should delete the selected cupom', async () => {
        await request(app)
            .delete(`/cupom/${idResponse}`)
            .set('Authorization', token)
            .expect(204);
    });
});
