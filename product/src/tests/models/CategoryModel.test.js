import { describe, it, expect, jest } from '@jest/globals';
import CategoryModel from '../../models/CategoryModel.js';

describe('Testing Category Model', () => {
    const newCategory = {
        name: 'Consoles',
        status: 'Ativa'
    };

    it('Test if instantiate a new category', () => {
        const category = new CategoryModel(newCategory);

        expect(category).toEqual(
            expect.objectContaining(newCategory)
        );
    });

    it('Test if instance is saved in DB', () => {
        const category = new CategoryModel(newCategory);

        category.salvar = jest.fn().mockReturnValue({
            _id: '507f1f77bcf86cd799439011',
            name: 'Consoles',
            status: 'Ativa'
        });
      
        const retorno = category.salvar();
    
        expect(retorno).toEqual(
            expect.objectContaining({
                _id: expect.any(String),
                ...newCategory
            }),
        );
    });
});
