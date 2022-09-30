const sendResponse = (req, res, next) => {
    next();
    if (res?.error)
        return res.json({ error: true, status: 400, data: res.body });
    else
        return res.json({ error: false, status: 200, data: res.body });
};

module.exports = { sendResponse };
