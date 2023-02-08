'use-strict'

module.exports = (sequelize, DataTypes) => {
  const Payments = sequelize.define('Payments', {
    value: {
      type: DataTypes.DECIMAL(10,2),
      validate: {
        min: 0
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        is: /a-zA-Z/i
      }
    },
    card_number: {
      type: DataTypes.INTEGER,
      validate: {
        isCreditCard: true,
      }
    },
    expiration_date: {
      type: DataTypes.STRING,
      validate: {
        is: /([\d]{4}-[\d]{2})/
      }
    },
    cvv: {
      type: DataTypes.INTEGER,
      validate: {
        min: 100,
        max: 999
      }
    },
    status: {
      type: DataTypes.STRING,
      validate: {
        isIn:  [['CRIADO', 'CONFIRMADO', 'CANCELADO']]
      },
      defaultValue: "CRIADO"
    }
  });

  return Payments;
};
