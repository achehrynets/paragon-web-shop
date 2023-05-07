const express = require('express');
const app = express();
const log4js = require('log4js');

// Configure log4js
log4js.configure('./config/log4js.json');

const logger = log4js.getLogger();

// Define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server on port 3000
app.listen(3000, () => {
  logger.info('Server started on port 3000');
});
