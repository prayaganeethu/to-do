const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Lets create an awesome to do app!'))

app.listen(3000, () => console.log('To-do app listening on port 3000!'))
