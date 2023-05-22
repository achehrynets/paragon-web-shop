const backend = require('./api/server');
const database = require('./config/sequelize');
const logger = require('./config/logger');
const env = require('./config/globals');
/**
 * Initialize database connection and then start server
 * @returns {Promise<void>}
 */
const initApplication = async () => {
    try {
        await database.authenticate();
        logger.info('Database connection has been established successfully.');
        backend.listen(env.NODE_PORT, () => {
            logger.info('Server is listening on port 3000');
        });
    } catch (err) {
        logger.error(err);
    }
}

/**
 * Start the application
 */
initApplication();