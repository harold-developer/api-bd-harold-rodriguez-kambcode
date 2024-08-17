const express = require('express');
const router = express.Router();
const songsController = require('../controllers/songsController');

router.get('/', songsController.getAllSongs);
router.post('/', songsController.createSongs);

module.exports = router;