// app.js
require('dotenv').config(); // Læs miljøvariabler fra .env
const express = require('express');
const path = require('path');
const cors = require('cors'); // Middleware til at tillade CORS
const postersRoutes = require('./routes/postersRoutes');
const genresRoutes = require('./routes/genresRoutes');
const userProfilesRoutes = require('./routes/userProfilesRoutes');
const cartlinesRoutes = require('./routes/cartlinesRoutes');

const app = express();

app.use(express.json()); // Middleware til at parse JSON
app.use(cors()); // Aktiver CORS

// Serve statiske filer fra 'assets' mappen
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Brug de rigtige routes
app.use('/api/posters', postersRoutes);
app.use('/api/genres', genresRoutes);
app.use('/api/user_profiles', userProfilesRoutes);
app.use('/api/cartlines', cartlinesRoutes);

// Root route - Sender index.html filen
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Sørger for at sende index.html
});

// Catch-all for udefinerede ruter
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

// Start serveren
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
