const express = require('express');
const server = express();

server.use(express.static('public'));

const nunjucks = require('nunjucks');
nunjucks.configure('views', {
	express: server,
	noCache: true
});

server.get('/', function(req, res) {
	return res.render('index.html', { title: var1 });
});

server.listen(3000);
