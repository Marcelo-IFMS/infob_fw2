var http = require('http');
var server = http.createServer(function (req, res) {
    var url = req.url;
    if (url == "/") {
        res.end('Pagina Inicial');
    } else if (url == "/cursos") {
        res.end('Bem vindo Turma Info B! Pagina de cursos do IF');
    } else if (url == "/esportes") {
        res.end('Bem vindo Turma Info B! Pagina de esportes do IF');
    } else if (url == "/pesquisa") {
        res.end('Bem vindo Turma Info B! Pagina de pesquisa do IF');
    } else if (url == "/extensao") {
        res.end('Bem vindo Turma Info B! Pagina de extensao do IF');
    } else if (url == "/cultura") {
        res.end('Bem vindo Turma Info B! Pagina de cultura do IF');
    } else {
        res.end('Pagina Inexixtente');
    }
})
server.listen(3000);