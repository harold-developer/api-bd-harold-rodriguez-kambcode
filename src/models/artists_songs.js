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
      artists_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Artists,
            key: 'id'
        }
    },
        songs_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Songs,
            key: 'id'
        },
    },
}, {
    timestamps: true, // Esto crea automáticamente las columnas createdAt y updatedAt
    tableName: 'artists_songs', // Asegúrate de que el nombre de la tabla coincida con el de la BD
});

Artists.belongsToMany(Songs, { through: 'Artists_Songs', foreignKey: 'artists_id' });
Songs.belongsToMany(Artists, { through: 'Artists_Songs', foreignKey: 'songs_id' });

module.exports = Artists_Songs;

// Define la relación "uno a muchos" (One-to-Many) entre Artists y Songs. 
// Artists.hasMany(Songs, { foreignKey: 'artistsId', });
// Songs.belongsToMany(Artists, { through: 'artistsId', });

// module.exports = { Artists, Songs };