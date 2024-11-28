// app.js
require('dotenv').config(); // Læs miljøvariabler fra .env
const express = require('express');
const cors = require('cors'); // Middleware til at tillade CORS
const postersRoutes = require('./routes/postersRoutes'); // Importér posters-ruter
const genresRoutes = require('./routes/genresRoutes'); // Importér genres-ruter
const userProfilesRoutes = require('./routes/userProfilesRoutes');
const cartlinesRoutes = require('./routes/cartlinesRoutes'); // Importér cartlines-ruter

const app = express();

app.use(express.json()); // Middleware til at parse JSON
app.use(cors()); // Aktiver CORS
app.use('/api/cartlines', cartlinesRoutes); // Brug cartlines-ruter


// Brug posters-ruter og genres-ruter
app.use('/api/posters', postersRoutes);
app.use('/api/genres', genresRoutes);
app.use('/api/user_profiles', userProfilesRoutes);


// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Wallywood API!');
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
