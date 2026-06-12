module.exports = menu
const express = require('express')
const path = require('path')

const menu = require('./data')

const app = express()

app.use(express.static('public'))

app.get('/api/menu', (req,res)=>{
  res.json(menu)
})

const PORT = 3000

app.listen(PORT, ()=>{
  console.log(Server berjalan di http://localhost:${PORT})
})