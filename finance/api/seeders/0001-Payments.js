module.exports = {
    up: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkInsert('Payments',
            [{
                value: 199.98,
                name: 'Jorge da Silva',
                card_number: '4002358610886147',
                expiration_date: '2029-10',
                cvv: '369',
                status: 'CRIADO',
                createdAt: '2023-01-01',
                updatedAt: '2023-01-01'
            },
            {
                value: 300.00,
                name: 'Fabricio de Oliveira',
                card_number: '5376783816683474',
                expiration_date: '2028-11',
                cvv: '924',
                status: 'CRIADO',
                createdAt: '2023-01-01',
                updatedAt: '2023-01-01'
            }]
        );},
  
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('Payments', null, {});
    },
};