const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const router = express.Router()

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/', function (req, res) {
	response.success(req, res, 'Lista de Mensajes');
});

router.post('/', function (req, res) {
	if (req.query.error === 'ok') {
		response.error(req, res, 'Error', 401)
	} else {
		response.success(req, res, 'Mensaje Añadido');
	}
});

app.use('/app', express.static('public'))


app.listen(3000);
console.log('La aplicación esta escuchando en http://localhost:3000');

