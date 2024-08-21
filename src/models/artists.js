const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Artists = sequelize.define('Artists', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
    name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    bio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
    photoUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  timestamps: true, // Esto crea automáticamente las columnas createdAt y updatedAt
  tableName: 'artists', // Asegúrate de que el nombre de la tabla coincida con el de la BD
});

module.exports = Artists;