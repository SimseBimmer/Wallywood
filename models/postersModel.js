// models/postersModel.js
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

// Opret Supabase-klient
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Hent alle plakater
const getAllPosters = async () => {
    const { data, error } = await supabase
        .from('posters') // Brug tabellen 'posters' fra Supabase
        .select('*');   // Hent alle plakater

    if (error) {
        throw new Error('Error fetching posters from Supabase: ' + error.message);
    }
    return data; // Returner dataen som JSON
};

// Hent en plakat ved ID
const getPosterById = async (id) => {
    const { data, error } = await supabase
        .from('posters')
        .select('*')
        .eq('id', id) // Filtrér efter ID
        .single(); // Hent kun én plakat

    if (error) {
        throw new Error('Error fetching poster: ' + error.message);
    }
    return data;
};

// Opret en ny plakat
const createPoster = async (poster) => {
    const { data, error } = await supabase
        .from('posters')
        .insert([poster]);

    if (error) {
        throw new Error('Error creating poster: ' + error.message);
    }
    return data[0]; // Returnér den oprettede plakat
};

// Opdater en plakat
const updatePoster = async (id, updatedData) => {
    const { data, error } = await supabase
        .from('posters')
        .update(updatedData)
        .eq('id', id);

    if (error) {
        throw new Error('Error updating poster: ' + error.message);
    }
    return data[0]; // Returnér den opdaterede plakat
};

// Slet en plakat
const deletePoster = async (id) => {
    const { data, error } = await supabase
        .from('posters')
        .delete()
        .eq('id', id);

    if (error) {
        throw new Error('Error deleting poster: ' + error.message);
    }
    return data; // Returnér data for at bekræfte sletning
};

module.exports = {
    getAllPosters,
    getPosterById,
    createPoster,
    updatePoster,
    deletePoster
};
