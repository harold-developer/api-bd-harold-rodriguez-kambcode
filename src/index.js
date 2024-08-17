const sequelize = require('./config/database');
require('./models/artists');
require('./models/songs');
require('./models/artists_songs');

const app = require('./app'); // Importación del módulo app

// Configuración del puerto
const PORT = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    console.log('Tablas creadas correctamente.');

    // Iniciar el servidor después de la sincronización
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch(err => {
    console.error('No se pudo sincronizar la base de datos:', err);
});