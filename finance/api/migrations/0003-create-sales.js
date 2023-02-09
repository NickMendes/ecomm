'use-strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product: {
        allowNull: false,
        type: Sequelize.STRING
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    })
  },
  down: (queryInterface) => {
    return queryInterface.dropTable('Sales')
  }
}