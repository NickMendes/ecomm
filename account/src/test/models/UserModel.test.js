import { describe, it, expect, jest } from '@jest/globals';
import UserModel from '../../models/UserModel.js';

describe('Testing User Model', () => {
    const newUser = {
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
    };

    it('Test if instantiate a new User', () => {
        const user = new UserModel(newUser);

        expect(user).toEqual(
            expect.objectContaining(newUser)
        );
    });

    it('Test if instance is saved in DB', async () => {
        const user = new UserModel(newUser);
        
        user.salvar = jest.fn().mockReturnValue({
            _id: '63d80397cad2fbb2365aed02',
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
        });

        const retorno = user.salvar();

        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newUser
            })
        );
    });
});