const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Entry = sequelize.define('entry', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    date: { type: DataTypes.DATE,  allowNull: true  },
    studentId: { type: DataTypes.INTEGER , defaultValue: 0 }
})
 
//A model és az adatbázis szinkronizálása, nem erőltetve.
sequelize.sync({
    force: false
})
module.exports = Entry
