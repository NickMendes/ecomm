'use-strict';

module.exports = (sequelize, DataTypes) => {
    const Addresses = sequelize.define('Addresses', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cep: {
            type: DataTypes.STRING,
            validate: {
                isNumeric: true,
                len: [8]
            }
        },
        city: DataTypes.STRING,
        state: DataTypes.STRING
    });

    Addresses.associate = function(models) {
        Addresses.hasOne(models.Cupoms, {
            foreignKey: 'address_id'
        });
    };

    return Addresses;
};
