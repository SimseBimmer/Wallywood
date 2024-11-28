// controllers/postersController.js
const postersModel = require('../models/postersModel');

// Hent alle plakater
const getPosters = async (req, res) => {
    try {
        const posters = await postersModel.getAllPosters();
        res.status(200).json(posters);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posters', error: error.message });
    }
};

// Hent en plakat ved ID
const getPosterById = async (req, res) => {
    const { id } = req.params;
    try {
        const poster = await postersModel.getPosterById(id);
        if (!poster) {
            return res.status(404).json({ message: 'Poster not found' });
        }
        res.status(200).json(poster);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching poster', error: error.message });
    }
};

// Opret en ny plakat
const createPoster = async (req, res) => {
    const newPoster = req.body;
    try {
        const createdPoster = await postersModel.createPoster(newPoster);
        res.status(201).json(createdPoster);
    } catch (error) {
        res.status(500).json({ message: 'Error creating poster', error: error.message });
    }
};

// Opdater en plakat
const updatePoster = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedPoster = await postersModel.updatePoster(id, updatedData);
        if (!updatedPoster) {
            return res.status(404).json({ message: 'Poster not found' });
        }
        res.status(200).json(updatedPoster);
    } catch (error) {
        res.status(500).json({ message: 'Error updating poster', error: error.message });
    }
};

// Slet en plakat
const deletePoster = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await postersModel.deletePoster(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Poster not found' });
        }
        res.status(204).send(); // Returner 204 No Content
    } catch (error) {
        res.status(500).json({ message: 'Error deleting poster', error: error.message });
    }
};

module.exports = {
    getPosters,
    getPosterById,
    createPoster,
    updatePoster,
    deletePoster
};
