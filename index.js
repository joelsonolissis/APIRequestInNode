const express = require('express')
const app = express()
const port = 3000
const userRoute = require('./node-express/routes/userRoute')
userRoute(app)
app.get('/', (req, res)=> res.send('Ola mundo'))
app.listen(port, () => console.log('Rodando porata 3000'))
