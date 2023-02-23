module.exports = {
    up: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkInsert('Cupoms',
            [{
                name: 'Jose da Silva',
                cpf: '12345678998',
                address_id: 1,
                sale_id: 1,
                payment_id: 1,
                createdAt: '2023-01-01',
                updatedAt: '2023-01-01'
            }]
        );},
  
    down: async (queryInterface, _Sequelize) => {
        await queryInterface.bulkDelete('Cupoms', null, {});
    },
};