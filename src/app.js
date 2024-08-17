const express = require('express');
const artistsRoutes = require('./routes/artistsRoutes');
const songsRoutes = require('./routes/songsRoutes');
const artists_songsRoutes = require('./routes/artists_songsRoutes');

const app = express();

// Middleware para procesar JSON
app.use(express.json());

// Configuración de las rutas
app.use('/artists', artistsRoutes);
app.use('/songs', songsRoutes);
app.use('/artists_songs', artists_songsRoutes);

// Exportación del módulo app para que pueda ser usado en index.js
module.exports = app;