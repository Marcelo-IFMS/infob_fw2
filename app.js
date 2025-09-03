const express = require('express')
const app = express()

app.set('view engine', 'ejs')
// com esta linha de comando podemos altera a pasta dos arquivos para renderização
// app.set('views','src/pages')

app.get('/', (req, res) => {
  res.send('Hello World! - GET')
})
app.get('/cursos', (req, res) => {
  res.send('<html><body><h1>Bem vindo a Home de Cursos</h1><h3>IFMS</h3></body></html>')
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
app.listen(3000)