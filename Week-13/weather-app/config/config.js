require('dotenv').config();

const CONFIG = {
    API_BASE_URL: process.env.API_BASE_URL || 'https://api.openweathermap.org/data/2.5',
    API_KEY: process.env.API_KEY,
    PORT: process.env.PORT || 8080,
};

module.exports = CONFIG;
