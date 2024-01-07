const Sequelize = require("sequelize");
const db = require("../config/db.js");
const Laporan = require("./Laporan.js");

const { DataTypes } = Sequelize;

const Foto_kegiatan = db.define('Foto_kegiatan',{
    id_foto_kegiatan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_laporan: {
        type: DataTypes.INTEGER,
        // allowNull: f,
    },
    path: {
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    freezeTableName: true
});
// Foto_kegiatan.belongsTo(Laporan, { foreignKey: 'id_laporan' }); 

module.exports = Foto_kegiatan;