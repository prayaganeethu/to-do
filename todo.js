const express = require('express')
const routes = require('./routes')
const tasks = require('./routes/tasks')
const app = express()

const PORT = process.env.PORT || 8081

app.use(express.static('public'))
app.use(express.static('public/javascripts'))

app.get('/', routes.index)
app.get('/tasks', tasks.list)

app.listen(PORT, () => console.log('Express listening on port ', PORT))
