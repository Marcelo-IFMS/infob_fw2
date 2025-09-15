
const app = require('./config/server')
const port = require('./config/port')


var rotaHome = require('./route/home')
rotaHome(app);

var rotaCursos = require('./route/cursos')
rotaCursos(app);

var rotaPesquisa = require('./route/pesquisa')
rotaPesquisa(app);


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