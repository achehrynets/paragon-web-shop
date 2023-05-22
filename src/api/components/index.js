const authRoutes = require('./auth/routes');
function registerApiRoutes(router, prefix) {
    router.use(`${prefix}/auth`, authRoutes);
}

module.exports = {
    registerApiRoutes
}