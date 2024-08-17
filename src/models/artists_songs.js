const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Artists = require('./artists');
const Songs = require('./songs');

const Artists_Songs = sequelize.define('Artists_Songs', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
});

// Definir las relaciones
Artists.belongsToMany(Songs, { through: Artists_Songs });
Songs.belongsToMany(Artists, { through: Artists_Songs });

module.exports = Artists_Songs;