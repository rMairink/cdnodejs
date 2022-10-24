const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Posts = require('./models/Posts')
const handlebars = require('express-handlebars')
const ejs = require('ejs')

app.use(express.static('public'))


// Templates
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


app.engine('html', handlebars.engine({
    defautLayout: 'main.html',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'html')

// Rotas

app.get('/', (req, res) => {
    res.render('form')
})

app.get('/criados', (req, res) => {
    Posts.findAll().then((posts) => {
        res.render('postagens_criadas', {
            posts: posts
        })
    })
})

app.post('/posts_criados', (req, res) => {
        Posts.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/criados')
        }).catch((err) => {
            res.send('Erro' + err)
        })
})



app.get('/deletar/:id', (req, res) => {
    Posts.destroy({where: {'id': req.params.id}}).then(() => {
        res.redirect('/')
    }).catch((err) => {
        res.send('Erro: ' + err)
    })
})

app.listen('8080', () => {
    console.log('Servidor Rodando')
})