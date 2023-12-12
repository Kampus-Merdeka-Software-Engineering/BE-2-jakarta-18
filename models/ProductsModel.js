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
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    updated_at: DataTypes.DATE,
    deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    timestamps: false,
    underscored: true
});

module.exports = { Products };