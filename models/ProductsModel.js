const { DataTypes } = require('sequelize');
const sequalize = require('../config/sequalize');

const Products = sequalize.define('Products', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    variant: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});

module.exports = { Products };