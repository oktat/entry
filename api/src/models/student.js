const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Student = sequelize.define('student', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  },
    groupId: { type: DataTypes.INTEGER , defaultValue: 0 }
})
 
//A model és az adatbázis szinkronizálása, nem erőltetve.
sequelize.sync({
    force: false
})
module.exports = Student