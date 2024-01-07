const Sequelize = require("sequelize");
const db = require("../config/db.js");

const { DataTypes } = Sequelize;

const Video_kegiatan = db.define('Video_kegiatan',{
    id_video: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_laporan: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});

module.exports = Video_kegiatan;