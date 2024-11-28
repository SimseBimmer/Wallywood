// "http://localhost:3000/api/genres/"
const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genresController');

// Rute til at hente genrer
router.get('/', genresController.getGenres);

module.exports = router;
