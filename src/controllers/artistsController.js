const Artists = require('../models/artists');

const getAllArtists = async (req, res) => {
    try {
      const artists = await Artists.findAll();
      res.json(artists);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener los artistas.' });
    }
};

const createArtists = async (req, res) => {
    try {
      const { name, bio, photoUrl } = req.body;
      const artists = await Artists.create({ name, bio, photoUrl });
      res.status(201).json(artists);
    } catch (err) {
      res.status(500).json({ error: 'Error al crear los artistas.' });
    }
};

module.exports = {
    getAllArtists,
    createArtists,
};