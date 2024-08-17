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
});

module.exports = Artists;