const express = require('express');
const router = express.Router();
const artistsController = require('../controllers/artistsController');

router.get('/', artistsController.getAllArtists);
router.post('/', artistsController.createArtists);

module.exports = router;