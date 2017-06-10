const express = require('express')

const app = express()
app.set('view engine','ejs')

require('./routes/baseRoutes')(app)

module.exports = app