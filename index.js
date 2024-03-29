const express = require('express')
const bodyParse = require('body-parser')
const userRoute = require('./routes/userRoute')
const app = express()
const port = 3000

app.use(bodyParse.urlencoded({ extended: false}))
userRoute(app)
app.get('/', (req, res)=> res.send('Ola mundo'))
app.listen(port, () => console.log('Rodando porta 3000'))
