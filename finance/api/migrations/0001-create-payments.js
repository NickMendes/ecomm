'use-strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      value: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      card_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      expiration_date: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cvv: {
        allowNull: false,
        type: Sequelize.STRING
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Payments')
  }
}