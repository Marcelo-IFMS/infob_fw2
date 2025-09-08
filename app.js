const express = require('express')
const app = express()
//para criar a variável de ambiente no Windows use set port=3000 
const port = process.env.port;
console.log(port);

app.set('view engine', 'ejs')
// com esta linha de comando podemos altera a pasta dos arquivos para renderização
// app.set('views','src/pages')
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World! - GET')
})
app.get('/cursos', (req, res) => {
  res.render('cursos')
})
app.get('/pesquisa', (req, res) => {
  res.render('./pesquisa')
})
app.post('/', (req, res) => {
  res.send('Requisição Post')
})
app.put('/', (req, res) => {
  res.send('Requisição PUT')
})
app.delete('/', (req, res) => {
  res.send('Requisição Delete')
})
app.listen(port)