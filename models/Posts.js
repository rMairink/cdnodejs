const database = require('./databases')
const Posts = database.sequelize.define('postagens', {
    titulo: {
        type: database.Sequelize.STRING
    },
    conteudo: {
        type: database.Sequelize.TEXT
    }
})

module.exports = Posts


