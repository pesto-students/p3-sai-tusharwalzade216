const { getPaginationIndices } = require("../utils")

const paginate = (data, limit, page) => {
    let result = [];
    const { endIndex, startIndex } = getPaginationIndices(page, limit);
    result = data?.slice(startIndex || 0, endIndex || data?.length);
    return result;
}

module.exports = { paginate };
