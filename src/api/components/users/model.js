const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/sequelize');

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        type: DataTypes.UUID
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        allowNull: false,
        defaultValue: "user",
        type: DataTypes.ENUM("user", "admin")
    }
}, {
    timestamps: false
});

module.exports = User;