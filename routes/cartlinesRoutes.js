const express = require('express');
const router = express.Router();
const cartlinesController = require('../controllers/cartlinesController');

// Hent alle linjer i kurven
router.get('/', cartlinesController.getAllCartlines);

// Hent én linje i kurven ved ID
router.get('/:id', cartlinesController.getCartlineById);

// Opret en ny linje i kurven
router.post('/', cartlinesController.createCartline);

// Opdater en linje i kurven
router.put('/:id', cartlinesController.updateCartline);

// Slet en linje i kurven
router.delete('/:id', cartlinesController.deleteCartline);

module.exports = router;
