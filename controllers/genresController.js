const genresModel = require('../models/genresModel');

// Controller til at hente alle genrer
const getGenres = async (req, res) => {
    try {
        const genres = await genresModel.getAllGenres(); // Hent data fra modellen
        res.status(200).json(genres); // Returner data som JSON
    } catch (error) {
        res.status(500).json({ message: 'Error fetching genres', error: error.message });
    }
};

module.exports = { getGenres };
