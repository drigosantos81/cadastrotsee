const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const methodOverride = require('method-override');

// const port = process.env.PORT || 5002;
// const session = require('./config/session');
const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use(methodOverride('_method'));
server.use(routes);

server.set("view engine", "html");

nunjucks.configure("src/app/views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("index");
});

server.listen(5001, function() {
    console.log("Servidor Ligado");
})