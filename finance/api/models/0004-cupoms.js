'use-strict';

module.exports = (sequelize, DataTypes) => {
    const Cupoms = sequelize.define('Cupoms', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 40]
            }
        },
        cpf: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
                len: [11]
            }
        },
    });

    Cupoms.associate = function(models) {
        Cupoms.belongsTo(models.Addresses, {
            foreignKey: 'address_id'
        });
        Cupoms.belongsTo(models.Sales, {
            foreignKey: 'sale_id'
        });
        Cupoms.belongsTo(models.Payments, {
            foreignKey: 'payment_id'
        });
    };
  
    return Cupoms;
};
