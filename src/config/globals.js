const env = {
    NODE_PORT: process.env.NODE_PORT || 3000,
    DATABASE_HOST: process.env.DATABASE_URL || 'localhost',
    DATABASE_PORT: process.env.DATABASE_PORT || 5432,
    DATABASE_NAME: process.env.DATABASE_NAME || 'paragon',
    DATABASE_USER: process.env.DATABASE_USER || 'postgres',
    DATABASE_PASSWORD: process.env.PASSWORD || 'postgres',
    JWT_SECRET: process.env.JWT_SECRET || '716f79a0e4b3bd185a8c76085092cebbcaffcb28b98ed1fcc77cb94ad97016e0',
    JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1h'
}

module.exports = env;