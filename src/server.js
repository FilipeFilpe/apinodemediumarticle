const express = require('express');

const api = express();

const routes = require('./router');

api.use(routes);

api.listen(3333);