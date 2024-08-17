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
    artistId: {
    type: DataTypes.INT,
    allowNull: true,
  },
    releaseYear: {
    type: DataTypes.INT,
    allowNull: true,
  },
    duration: {
    type: DataTypes.INT,
    allowNull: true,
  },
    coverUrl: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    },
});

module.exports = Songs;

