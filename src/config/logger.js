const log4js = require('log4js');
// Configure log4js using a configuration file
log4js.configure('log4js-config.json');
const logger = log4js.getLogger();

module.exports = logger;