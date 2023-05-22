const { verifyPassword, hashPassword } = require("../../../utilities/utility");
const { createToken } = require("./service");
const { findUserByEmail, createUser } = require("../users/service");

/**
 * Sign in user and return JWT token
 * @param request web request
 * @param response web response
 * @param next next middleware
 * @returns {Promise<*>} Returns the token
 */
async function login(request, response, next) {
    try {
        const { email, password } = request.body;
        const user = await findUserByEmail(email);
        if (!user || !verifyPassword(password, user.password)) {
            return response.status(401).json({
                error: "Invalid credentials",
                status: 401
            });
        }

        const token = createToken(user);
        return response.status(200).json({
            token: token,
            status: 200
        });
    } catch (err) {
        next(err);
    }
}

/**
 * Sign up user and return created user
 * @param request web request
 * @param response web response
 * @param next next middleware
 * @returns {Promise<*>} Returns the created user
 */
async function register(request, response, next) {
    try {
        const { name, email, password } = request.body;

        let user = await findUserByEmail(email);
        if (user) {
            return response.status(400).json({
                error: "User with given email already exists",
                status: 400
            });
        }
        const newUser = {
            name: name,
            email: email,
            password: hashPassword(password)
        }
        const createdUser = await createUser(newUser);
        delete createdUser.password;
        return response.status(201).json({
            data: createdUser,
            status: 201
        });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    login,
    register
}