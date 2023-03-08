'use-strict';

module.exports = (sequelize, DataTypes) => {
    const Sales = sequelize.define('Sales', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product: DataTypes.STRING,
        quantity: {
            type: DataTypes.INTEGER,
            validate: {
                min: 0
            }
        },
        total_price: {
            type: DataTypes.DECIMAL(10,2),
            validate: {
                min: 0.00
            }
        }
    });

    Sales.associate = function(models) {
        Sales.hasOne(models.Cupoms, {
            foreignKey: 'sale_id'
        });
    };

    return Sales;
};
