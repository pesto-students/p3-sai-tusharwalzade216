const router = require('express').Router();

const config = require('../config');
const { getWeatherDataForCity, getForecastForNextXDays, getWeatherDataForListOfCities } = require('../controllers');

router.use((req, res, next) => {
    req.query = { ...req.query, appid: config.API_KEY };
    next();
});

// Forecast for next X days, API limit - 5 days by 3 hours
router.get('/forecast/:city/:days?', getForecastForNextXDays);

//  Current weather conditions of Multiple cities
router.get('/weather/list', getWeatherDataForListOfCities);

//  Current weather conditions of any particular city
router.get('/weather/:city', getWeatherDataForCity);

module.exports = router;
