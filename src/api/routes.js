const { registerMiddleware, registerErrorHandler } = require('./middleware');
const { registerApiRoutes } = require('./components');
function initRoutes(router) {
    const prefix = '/api/v1';

    router.get(`${prefix}/health`, (req, res) => res.status(200).json({status: 'Up and running'}));

    registerMiddleware(router);
    registerApiRoutes(router, prefix);
    registerErrorHandler(router);
}

module.exports = {
    initRoutes
}