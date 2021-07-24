const express = require('express')
const app = express.Router()
const mainController = require('../controllers/mainController.js')
const postsController = require('../controllers/postsController.js')


app.get('/', mainController.index)

app.get('/posts', mainController.posts)

app.get('/about', mainController.about)

app.get('/contacto', mainController.contacto)

//posts

app.get('/posts/arbol-de-reproduccion', postsController.arbol)
app.get('/posts/configuracion-correcta-para-cobrar', postsController.ConfiguracionPCobrar)
app.get('/posts/como-crear-becas', postsController.becas)
app.get('/posts/cuenta-mas-economica', postsController.cuentaEconomica)
app.get('/posts/ganancia-de-nuestros-becados', postsController.becados)
app.get('/posts/reproduccion-axies', postsController.reproduccion)
app.get('/posts/como-ganar-slp-y-exp', postsController.ganarSlpExp)
app.get('/posts/que-es-un-terminator', postsController.ComoEsUnTerminator)





module.exports = app