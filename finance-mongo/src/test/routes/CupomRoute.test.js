import request from 'supertest';
import { describe, expect, it, afterEach, beforeEach } from '@jest/globals';
import app from '../../app.js';

let server;
beforeEach(() => {
    const PORT = 3005;
    server = app.listen(PORT);
});

afterEach(() => {
    server.close();
});

describe('GET route /cupom', () => {
    it('Should return an array of payments', async () => {
        const response = await request(app)
            .get('/cupom')
            .expect(200);
        expect(response.body[0].user_info.name).toEqual('João Castor da Silva');
        expect(response.body[0].payment_info.card_number).toEqual('5502147823651234');
    });
});

let idResponse;
describe('POST route /admin/cupom', () => {
    it('Should add a new cupom', async () => {
        const response = await request(app)
            .post('/admin/cupom')
            .send({
                user_id: '63ee835b5ab79d1681d8a05c',
                sale_id: '63ee8ff5599ad81ab5bb057f',
                payment_id: '63ee91b907d8a0a334f1d3bc'
            })
            .expect(201);
        idResponse = response.body['_id'];
    });
    it('Should return error if body is empty', async () => {
        await request(app)
            .post('/admin/cupom')
            .send({})
            .expect(400);
    });
});

describe('GET route /cupom/:id', () => {
    it('Should return an object of a cupom', async () => {
        const response = await request(app)
            .get(`/cupom/${idResponse}`)
            .expect(200);
        expect(response.body.user_info.ame).toEqual('João Castor da Silva');
    });
});

describe('PUT route /admin/cupom/:id', () => {
    it('Should update information on the selected cupom', async () => {
        await request(app)
            .patch(`/admin/cupom/${idResponse}`)
            .send({
                name: 'Testando'
            })
            .expect(202);
        const response = await request(app)
            .get(`/cupom/${idResponse}`)
            .expect(200);
        expect(response.body.user_info.name).toEqual('Testando');
    });
});

describe('DELETE route /admin/cupom/:id', () => {
    it('Should delete the selected cupom', async () => {
        await request(app)
            .delete(`/admin/cupom/${idResponse}`)
            .expect(202);
    });
});
