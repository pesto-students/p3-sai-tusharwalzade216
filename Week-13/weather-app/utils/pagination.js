const getPaginationIndices = (page, limit) => {
    if (!page || !limit)
        return { undefined, undefined };

    const endIndex = page * limit;
    const startIndex = (page - 1) * limit;
    return { endIndex, startIndex };
};

module.exports = {
    getPaginationIndices
};
