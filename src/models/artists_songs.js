// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/database');
const Artists = require('./artists');
const Songs = require('./songs');

// const Artists_Songs = sequelize.define('Artists_Songs', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//       },
// });

// // Define la relación "uno a muchos" (One-to-Many) entre Artist y Song. 
// Artists.hasMany(Songs, { foreignKey: 'artistId', });
// Songs.belongsToMany(Artists, { through: 'artistId', });

// module.exports = Artists_Songs;

Artists.belongsToMany(Songs, { through: 'Artists_Songs', foreignKey: 'artistId' });
Songs.belongsToMany(Artists, { through: 'Artists_Songs', foreignKey: 'songId' });

module.exports = { Artists, Songs };