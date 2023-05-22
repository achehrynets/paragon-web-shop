const compression = require('compression');
const { handleError } = require('../../utilities/utility');
const { json } = require("express");

/**
 * Register all middleware
 * @param router - express router
 */
function registerMiddleware(router) {
    router.use(json());
    router.use(compression());
}
/**
 * Error handler middleware
 */
function registerErrorHandler(router) {
    router.use((error, request, response, next) => {
        handleError(error);
        return response.status(500).json({
            error: error.message || error,
        });
    });
}

module.exports = {
    registerMiddleware,
    registerErrorHandler
}