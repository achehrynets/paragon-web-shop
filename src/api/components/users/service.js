const User = require("./model")

/**
 * This method finds a user by email
 * @param email Email of the user
 * @returns {Promise<user>} Returns the user
 */
async function findUserByEmail(email) {
    return User.findOne({ where: { email: email }});
}

/**
 * This method creates a new user
 * @param user User entity to be created
 * @returns {Promise<user>} Returns the created user
 */
async function createUser(user) {
    user.role = "user";
    return User.create(user);
}

module.exports = {
    findUserByEmail,
    createUser
};