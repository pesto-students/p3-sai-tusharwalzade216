const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');
const { CONFIG, corsOptions } = require('./config');
const { errorHandler, rateLimiter } = require('./middlewares');

const app = express();
const port = CONFIG.PORT;

app.use(cors(corsOptions));

app.use(rateLimiter);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}..`));
