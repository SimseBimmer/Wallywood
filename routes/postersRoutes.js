// routes/postersRoutes.js
// "http://localhost:3000/api/posters"
const express = require('express');
const router = express.Router();
const postersController = require('../controllers/postersController');

// Håndter GET-forespørgsler
router.get('/', postersController.getPosters);
router.get('/:id', postersController.getPosterById); // Hent en plakat ved ID
router.post('/', postersController.createPoster); // Opret en ny plakat
router.put('/:id', postersController.updatePoster); // Opdater en plakat
router.delete('/:id', postersController.deletePoster); // Slet en plakat

module.exports = router;
