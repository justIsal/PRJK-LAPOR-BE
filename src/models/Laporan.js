const Sequelize = require("sequelize");
const db = require("../config/db.js");
const FotoKegiatan = require("./Foto_kegiatan.js");

const { DataTypes } = Sequelize;

const Laporan  = db.define('Laporan',{
    id_laporan: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    id_client: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    judulLaporan:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_jenis_laporan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lokasi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    isi: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    id_foto_kegiatan: {
        type: DataTypes.INTEGER,
    },
    id_video_kegiatan: {
        type: DataTypes.INTEGER,
    },
    status: {
        type: DataTypes.INTEGER(1),
        defaultValue: 1,
        allowNull: false
    }
},{
    freezeTableName: true
});

// Laporan.belongsTo(Foto_kegiatan, { foreignKey: 'id_foto_kegiatan' }); 

module.exports = Laporan;