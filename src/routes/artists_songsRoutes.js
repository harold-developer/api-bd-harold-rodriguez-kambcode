const express = require('express');
const router = express.Router();
const artists_songsController = require('../controllers/artists_songsController');

router.get('/', artists_songsController.getAllArtists_songs);
router.post('/', artists_songsController.createArtists_songs);

module.exports = router;