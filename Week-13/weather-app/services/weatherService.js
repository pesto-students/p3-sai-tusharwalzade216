const { default: axios } = require('axios');

const config = require('../config');
const { sendError, sendSuccess } = require('../middlewares');

const API_BASE_URL = config.API_BASE_URL;

const _getWeatherDataForCity = async ({ city, query }) => {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/weather`,
            { params: { q: city, ...query } }
        );
        return sendSuccess(data);
    } catch (error) {
        return sendError(error);
    }
};

const _getForecastForLast5Days3Hours = async ({ city, query }) => {
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/forecast`,
            { params: { q: city, ...query } }
        );
        return sendSuccess(data);
    } catch (error) {
        return sendError(error);
    }
};


module.exports = {
    _getWeatherDataForCity,
    _getForecastForLast5Days3Hours,
};
