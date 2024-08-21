const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Songs = sequelize.define('Songs', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    artistsId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
    releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
    duration: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
    coverUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
}, {
  timestamps: true, // Esto crea automáticamente las columnas createdAt y updatedAt
  tableName: 'songs', // Asegúrate de que el nombre de la tabla coincida con el de la BD
});

module.exports = Songs;

