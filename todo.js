const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 8080

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'jade')

app.get('/', routes.index)

app.listen(PORT, () => console.log('Express listening on port ', PORT))
