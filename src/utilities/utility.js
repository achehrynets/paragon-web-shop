const bcrypt = require('bcryptjs');
const logger = require('../config/logger');

function handleError(err) {
    logger.error(err.stack || err);
}

function verifyPassword(password, hashedPassword) {
    return (resolve, reject) => {
        bcrypt.compare(password, hashedPassword, (err, result) => {
            if (err) {
                reject(err);
            }
            resolve(result);
        });
    }
}

/**
 * Hashes the password using bcrypt
 * @param password Password to be hashed
 * @returns Returns the hashed password
 */
function hashPassword(password) {
    return (resolve, reject) => {
        bcrypt.genSalt(10, (error, salt) => {
            if (error) {
                reject(error);
            }
            bcrypt.hash(password, salt, (error, hash) => {
                if (error) {
                    reject(error);
                }
                resolve(hash);
            });
        });
    }
}

module.exports = {
    handleError,
    verifyPassword,
    hashPassword
}