const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Client = db.define('Client',{
    id_client: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    namaLengkap: {
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
    noHp: {
        type: DataTypes.STRING
    },
    jenisKelamin: {
        type: DataTypes.STRING
    },
    NIK: {
        type: DataTypes.STRING
    },
    domisili: {
        type: DataTypes.STRING
    },
    alamatLengkap: {
        type: DataTypes.STRING
    },
    pekerjaan: {
        type: DataTypes.STRING
    },
    refresh_token: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    }
},{

    freezeTableName: true
});

module.exports = Client;