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
    ingredients: DataTypes.STRING,
    image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
});

module.exports = { Products };