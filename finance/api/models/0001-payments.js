'use-strict';

module.exports = (sequelize, DataTypes) => {
    const Payments = sequelize.define('Payments', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        value: {
            type: DataTypes.DECIMAL(10,2),
            validate: {
                min: 0
            }
        },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [5, 40]
            }
        },
        card_number: {
            type: DataTypes.STRING,
            validate: {
                isCreditCard: true
            }
        },
        expiration_date: {
            type: DataTypes.STRING,
            validate: {
                is: /([\d]{4}-(0[1-9]|10|11|12)$)/
            }
        },
        cvv: {
            type: DataTypes.STRING,
            validate: {
                len: [3],
                isNumeric: true
            }
        },
        status: {
            type: DataTypes.STRING,
            validate: {
                isIn:  [['CRIADO', 'CONFIRMADO', 'CANCELADO']]
            },
            defaultValue: 'CRIADO'
        }
    });

    Payments.associate = function(models) {
        Payments.hasOne(models.Cupoms, {
            foreignKey: 'payment_id'
        });
    };

    return Payments;
};
