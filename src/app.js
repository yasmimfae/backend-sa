const express = require('express')
const cors = require('cors')
const app = express()

const index = require('./routers/index')
const userRouters = require('./routers/user.routers')
const animalRouters = require('./routers/animal.routers')
const denunciaRouters = require('./routers/denuncia.routers')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.json({type: 'application/vnd.api+json' }))
app.use(cors())

app.use(index)
app.use('/api/', userRouters)
app.use('/api/', animalRouters)
app.use('/api/', denunciaRouters)

module.exports = app
