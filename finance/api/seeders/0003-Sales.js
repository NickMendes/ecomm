module.exports = {
    up: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkInsert('Sales',
            [{
                product: 'Carregador iPhone - USBC',
                quantity: 1,
                total_price: 300.00,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-01'
            }]
        );},
  
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('Sales', null, {});
    },
};