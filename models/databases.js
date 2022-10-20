const Sequelize = require('sequelize')
const sequelize = new Sequelize('post', 'root', 'admin123', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = {
    Sequelize:  Sequelize,
    sequelize: sequelize
}