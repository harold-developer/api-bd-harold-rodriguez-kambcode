const express = require('express');
const router = express.Router();
const artists_songsController = require('../controllers/artists_songsController');

router.get('/', artists_songsController.getAllArtists);
router.post('/', artists_songsController.createArtists);

module.exports = router;