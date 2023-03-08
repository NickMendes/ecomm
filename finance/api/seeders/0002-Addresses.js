module.exports = {
    up: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkInsert('Addresses',
            [{
                cep: '13035090',
                city: 'Campinas',
                state: 'SP',
                createdAt: '2023-01-01',
                updatedAt: '2023-01-01'
            }]
        );},
  
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('Addresses', null, {});
    },
};
