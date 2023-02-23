'use-strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Cupoms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            cpf: {
                allowNull: false,
                type: Sequelize.STRING
            },
            address_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Addresses', key: 'id' }
            },
            sale_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Sales', key: 'id' }
            },
            payment_id: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: { model: 'Payments', key: 'id' }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATEONLY
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATEONLY
            }
        });
    },
    down: (queryInterface) => {
        return queryInterface.dropTable('Cupoms');
    }
};