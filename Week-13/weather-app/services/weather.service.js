const { default: axios } = require('axios');

const config = require('../config');
const { sendError, sendSuccess, paginate } = require('../utils');

const API_BASE_URL = config.API_BASE_URL;

/**
 * @function _getWeatherDataForCity a method to get current weather for the given city
 * @param {String} city city name
 * @param {Object} query - search query with appid
 * @example http://localhost:8080/api/weather/london
 * @returns data on success, error on error
 */
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

/**
 * @function _getForecastForNextXDays a method to get forecast for next 5 days by 3 hours at max
 * @param {String} city city name
 * @param {Object} query - search query including (appid, date, limit, page, weatherType)
 * @description - date string - yyyy-mm-dd 12:00:00, weatherType - Clear/ Clouds/ Rain
 * @example http://localhost:8080/api/forecast/london/4?page=1&limit=2&weatherType=clouds
 * @example http://localhost:8080/api/forecast/london?page=1&limit=2&weatherType=clouds&date=2022-09-28
 * @returns data on success, error on error
 */
const _getForecastForNextXDays = async ({ city, days, query }) => {
    let targetDate = new Date();
    let { date, weatherType } = query;
    const { appid, limit, page } = query;

    if (days) {
        targetDate.setDate(targetDate.getDate() + parseInt(days));
        targetDate = new Date(targetDate.toISOString()?.split('T')?.[0]);
    }

    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/forecast`,
            { params: { q: city, appid } }
        );

        if (data?.list?.length) {
            date = date?.trim();
            weatherType = weatherType?.trim()?.toLowerCase();

            if (days || date || weatherType) {
                data['list'] = data?.list?.filter(item => {
                    const itemDate = item?.dt_txt?.split(' ')?.[0];
                    if (
                        (days && !weatherType
                            && new Date(itemDate) <= targetDate)
                        ||
                        (days && weatherType
                            && new Date(itemDate) <= targetDate
                            && item?.weather?.some(w => w?.main?.toLowerCase().includes(weatherType)))
                        ||
                        (date && !weatherType && item?.dt_txt?.includes(date))
                        ||
                        (!date && weatherType
                            && item?.weather?.some(w => w?.main?.toLowerCase().includes(weatherType)))
                        ||
                        (date && weatherType
                            && item?.dt_txt?.includes(date)
                            && item?.weather?.some(w => w?.main?.toLowerCase().includes(weatherType)))
                    ) {
                        return item;
                    }
                });
            }

            data['count'] = data?.list?.length;

            if (limit && page)
                data['list'] = paginate(data?.list, limit, page);
        }

        return sendSuccess(data);
    } catch (error) {
        return sendError(error);
    }
};

/**
 * @function _getWeatherDataForListOfCities a method to get current weather for the given list of cities
 * @param {Array<String>} cities list of city names
 * @param {Object} query - search query with appid
 * @example http://localhost:8080/api/weather/list
 * @body "cities": ["Sangamner", "Nashik", "Shirdi"]
 * @returns data on success, error on error
 */
const _getWeatherDataForListOfCities = async ({ cities, query }) => {
    try {
        let reqArr = [], resArr = [];
        cities.forEach(city =>
            reqArr.push(
                axios.get(`${API_BASE_URL}/weather`, {
                    params: { q: city, ...query }
                })
            )
        );

        await Promise.all(reqArr).then(res => {
            res.map(r => resArr.push(r?.data));
        });

        return sendSuccess(resArr);
    } catch (error) {
        return sendError(error);
    }
};

module.exports = {
    _getWeatherDataForCity,
    _getForecastForNextXDays,
    _getWeatherDataForListOfCities,
};
