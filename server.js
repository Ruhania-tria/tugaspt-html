module.exports = menu
const express = require('express')
const path = require('path')

const menu = require('./data')

const app = express()

app.use(express.static('public'))

app.get('/api/menu', (req,res)=>{
  res.json(menu)
})

const express = require('express')
const path = require('path')
require('dotenv').config()

const paymentRoute = require('./routes/payment')

const app = express()

app.use(express.json())
app.use(express.static('public'))

app.use('/payment', paymentRoute)

const PORT = 3000

app.listen(3000, ()=>{
  console.log(Server berjalan di http://localhost:${300})
})
