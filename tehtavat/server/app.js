const express = require('express')
const app = express()
const port = 3001

app.get('/temperature/', (req, res) => res.send({temperature: (Math.random() * 60) - 30}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))