const { DataTypes } = require('sequelize')
const sequelize = require('../database/database')
 
const Group = sequelize.define('group', {
    id: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: { type: DataTypes.STRING,  allowNull: false  }
})
 
//A model és az adatbázis szinkronizálása, nem erőltetve.
sequelize.sync({
    force: false
})
module.exports = Group