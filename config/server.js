const express = require('express')
const app = express()
const consign = require('consign');
//para criar a variável de ambiente no Windows use set port=3000 

app.set('view engine', 'ejs')
// com esta linha de comando podemos altera a pasta dos arquivos para renderização
// app.set('views','src/pages')
app.use(express.static('public'))
 
consign()
  .include('./route')
  .into(app);

module.exports=app

