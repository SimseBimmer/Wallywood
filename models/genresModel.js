const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Model til at hente alle genrer
const getAllGenres = async () => {
    const { data, error } = await supabase
        .from('genres') // Tabellenavnet i Supabase
        .select('*');   // Hent alle kolonner

    if (error) {
        throw new Error('Error fetching genres from Supabase: ' + error.message);
    }
    return data; // Returner genrer som JSON
};

module.exports = { getAllGenres };
