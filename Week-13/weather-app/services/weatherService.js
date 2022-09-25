const { default: axios } = require('axios');

const config = require('../config');
const { sendError, sendSuccess, paginate } = require('../middlewares');

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
    let { date, weatherType } = query;
    const { limit, page, appid } = query;
    try {
        const { data } = await axios.get(
            `${API_BASE_URL}/forecast`,
            { params: { q: city, appid } }
        );

        if (data?.list?.length) {
            date = date?.trim();
            weatherType = weatherType?.trim()?.toLowerCase();
            let result = [];
            if (date || weatherType) {
                data?.list?.forEach(item => {
                    if (date && !weatherType && item?.dt_txt?.includes(date)) {
                        result.push(item);
                    } else if (!date && weatherType
                        && item?.weather?.some(w => w?.main?.toLowerCase().includes(weatherType))) {
                        result.push(item);
                    } else if (date && weatherType
                        && item?.dt_txt?.includes(date)
                        && item?.weather?.some(w => w?.main?.toLowerCase().includes(weatherType))) {
                        result.push(item);
                    }

                    return result;
                });

                data['list'] = result;
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
    _getForecastForLast5Days3Hours,
    _getWeatherDataForListOfCities,
};
