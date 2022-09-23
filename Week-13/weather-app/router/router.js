const router = require('express').Router();

const config = require('../config');
const { getWeatherDataForCity, getForecastForLast5Days3Hours } = require('../controllers');

router.use((req, res, next) => {
    req.query = { ...req.query, appid: config.API_KEY };
    next();
});

router.get('/forecast5by3/:city', getForecastForLast5Days3Hours);

router.get('/weather/:city', getWeatherDataForCity);

module.exports = router;
