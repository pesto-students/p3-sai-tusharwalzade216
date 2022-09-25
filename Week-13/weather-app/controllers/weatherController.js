const { _getWeatherDataForCity, _getForecastForNextXDays, _getWeatherDataForListOfCities } = require("../services");

const getWeatherDataForCity = async (req, res) => {
    try {
        const data = await _getWeatherDataForCity({
            city: req.params.city,
            query: req.query
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const getForecastForNextXDays = async (req, res) => {
    try {
        const data = await _getForecastForNextXDays({
            city: req.params.city,
            days: req.params.days,
            query: req.query
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const getWeatherDataForListOfCities = async (req, res) => {
    try {
        const data = await _getWeatherDataForListOfCities({
            cities: req.body.cities,
            query: req.query
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
    getWeatherDataForCity,
    getForecastForNextXDays,
    getWeatherDataForListOfCities,
};
