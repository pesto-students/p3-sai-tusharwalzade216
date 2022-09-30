const router = require('express').Router();
const { body, validationResult } = require('express-validator');

const { logger, sendResponse } = require('../middlewares');
const { loginValidator } = require('../validators');

router.use(logger);

router.get('/', (req, res) => {
    res.status(200).send('default route called');
});

router.post('/login', loginValidator, sendResponse, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.body = errors.array();
        res.error = true;
        return;
    }
    res.body = 'You are successfully logged in';
});

module.exports = router;
