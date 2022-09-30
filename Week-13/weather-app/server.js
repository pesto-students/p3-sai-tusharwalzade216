const express = require('express');

const config = require('./config');
const router = require('./router');

const app = express();
const port = config.PORT;

app.use(express.json());

app.use('/api', router);

app.listen(port, () => console.log(`Listening on port ${port}..`));
