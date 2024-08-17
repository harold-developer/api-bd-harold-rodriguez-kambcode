const Artists_songs = require('../models/artists_songs');

const getAllArtists_songs = async (req, res) => {
    try {
      const artists_songs = await Artists_songs.findAll();
      res.json(artists_songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los artistas y canciones.' });
    }
};

const createArtists_songs = async (req, res) => {
    try {
      const { artists_id, songs_id } = req.body;
      const artists_songs = await Artists_songs.create({ artists_id, songs_id });
      res.status(201).json(artists_songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear los artistas y canciones.' });
    }
};

module.exports = {
    getAllArtists_songs,
    createArtists_songs,
};