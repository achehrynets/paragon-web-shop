const jwt = require("jsonwebtoken");
const env = require("../../../config/globals");

/**
 * Create a JWT token with the user data
 * @param user User data
 * @returns the JWT token
 */
function createToken(user) {
    return jwt.sign({ id: user.id, email: user.email, role: user.role }, env.JWT_SECRET, {
        algorithm: "HS256",
        expiresIn: env.JWT_EXPIRATION
    });
}

/**
 * Verify the JWT token and check if the user has the required role
 * @param role Required role
 * @returns Returns the user data
 */
async function verifyToken(role) {
    return (req, res, next) => {
        const bearerHeader = req.headers["authorization"];
        if (!bearerHeader) {
            return res.status(403).json({error: "A token is required for authentication" });
        }
        const token = bearerHeader.split(" ")[1];
        try {
            req.user = jwt.verify(token, env.JWT_SECRET);
            if (req.user.role !== role && req.user.role !== "admin") {
                return res.status(401).json({ error: "Unauthorized" });
            }
        } catch (err) {
            return res.status(400).json({ error: "Invalid Token" });
        }
        return next();
    }
}

module.exports = {
    createToken,
    verifyToken
};