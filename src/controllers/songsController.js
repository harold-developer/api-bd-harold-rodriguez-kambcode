const Songs = require('../models/songs');

const getAllSongs = async (req, res) => {
    try {
      const songs = await Songs.findAll();
      res.json(songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener las canciones.' });
    }
};

const createSongs = async (req, res) => {
    try {
      const { title, artistsId, releaseYear, duration, coverUrl } = req.body;
      const songs = await Songs.create({ title, artistsId, releaseYear, duration, coverUrl });
      res.status(201).json(songs);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear las canciones.' });
    }
};

module.exports = {
    getAllSongs,
    createSongs,
};