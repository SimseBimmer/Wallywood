const CartlinesModel = require('../models/cartlinesModel');

// Hent alle linjer i kurven
const getAllCartlines = async (req, res) => {
    try {
        const cartlines = await CartlinesModel.getAllCartlines();
        res.status(200).json(cartlines);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cartlines', error: error.message });
    }
};

// Hent én linje i kurven ved ID
const getCartlineById = async (req, res) => {
    const { id } = req.params;
    try {
        const cartline = await CartlinesModel.getCartlineById(id);
        if (!cartline) {
            return res.status(404).json({ message: 'Cartline not found' });
        }
        res.status(200).json(cartline);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching cartline', error: error.message });
    }
};

// Opret en ny linje i kurven
const createCartline = async (req, res) => {
    const newCartline = req.body;
    try {
        const createdCartline = await CartlinesModel.createCartline(newCartline);
        res.status(201).json(createdCartline);
    } catch (error) {
        res.status(500).json({ message: 'Error creating cartline', error: error.message });
    }
};

// Opdater en linje i kurven
const updateCartline = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    try {
        const updatedCartline = await CartlinesModel.updateCartline(id, updatedData);
        if (!updatedCartline) {
            return res.status(404).json({ message: 'Cartline not found' });
        }
        res.status(200).json(updatedCartline);
    } catch (error) {
        res.status(500).json({ message: 'Error updating cartline', error: error.message });
    }
};

// Slet en linje i kurven
const deleteCartline = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await CartlinesModel.deleteCartline(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Cartline not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting cartline', error: error.message });
    }
};

module.exports = {
    getAllCartlines,
    getCartlineById,
    createCartline,
    updateCartline,
    deleteCartline
};
