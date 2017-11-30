const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, '/views')))

app.get('/', routes.index)

app.listen(PORT, () => console.log('Express listening on port ', PORT))
