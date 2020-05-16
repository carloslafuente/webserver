const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

//	Express hbs
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
	res.render('home', {
		name: 'carlos la fuente',
	});
});

app.get('/about', function (req, res) {
	res.render('about');
});

app.listen(3000, () => {
	console.log('Escuchando peticiones en el puerto 3000');
});
