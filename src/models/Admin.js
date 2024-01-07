const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Admin = db.define('Admin',{
    id_admin: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    refreshToken: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},{
    // tableName: 'Admin'
    freezeTableName: true
});

module.exports = Admin;