const express = require('express')

const app = express()

const PORT = process.env.PORT || 8080

app.get('/', (req, res) => res.send('Lets create an awesome to do app!'))

app.listen(PORT, () => console.log('To-do app listening on port ', PORT))
