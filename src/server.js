const express = require('express')
const app = express()
const helmet = require('helmet')
const routes = require('./routes')

app.use(helmet())
app.use(express.json())
// adding routes
// app.use(routes)

require('./routes')(app)

app.get('/test', async (req, res) => {
    res.json({message: 'pass!'})
})

module.exports = app
