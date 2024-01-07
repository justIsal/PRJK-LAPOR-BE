const Sequelize = require("sequelize");

const db = new Sequelize('laporkeun','root','',
    {
      host: 'localhost',
      dialect: 'mysql'
    }
);

module.exports = db;