const { _getWeatherDataForCity, _getForecastForLast5Days3Hours } = require("../services");

const getWeatherDataForCity = async (req, res) => {
    try {
        const data = await _getWeatherDataForCity({ city: req.params.city, query: req.query });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
};

const getForecastForLast5Days3Hours = async (req, res) => {
    try {
        const data = await _getForecastForLast5Days3Hours({ city: req.params.city, query: req.query });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    getWeatherDataForCity,
    getForecastForLast5Days3Hours,
};
