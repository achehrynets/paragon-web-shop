const routes = require('./routes');
const express = require('express');
const app = express();

routes.initRoutes(app);

module.exports = app;

// https://blog.treblle.com/egergr/
// https://github.com/gothinkster/node-express-realworld-example-app/blob/master/app.js
// https://github.com/larswaechter/expressjs-api/blob/main/src/app.ts