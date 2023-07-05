const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
   // En Mayúsculas y singular      // en minúsculas y singular
const User = sequelize.define('user', {
    // Definimos las columnas aquí
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type:DataTypes.TEXT,
        allowNull: false
    },
    email: {
        type:DataTypes.TEXT,
        allowNull: false
    },
    password: {
        type:DataTypes.TEXT,
        allowNull: false
    },
    birthday: {
        type:DataTypes.DATE,
        allowNull: false
    },
});

module.exports = User;