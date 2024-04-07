const express = require('express');
const bodyParser = require('body-parser'); // Importar o body-parser
const exercicio1 = require('./exercicio1');
const exercicio2 = require('./exercicio2');
const exercicio3 = require('./exercicio3');
const exercicio4 = require('./exercicio4');
const exercicio5 = require('./exercicio5');
const exercicio6 = require('./exercicio6');
const exercicio7 = require('./exercicio7');
const exercicio8 = require('./exercicio8');
const exercicio9 = require('./exercicio9');

const app = express();

// Adicionar o middleware bodyParser para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());

// Rotas para cada exercício
app.use('/exercicio1', exercicio1);
app.use('/exercicio2', exercicio2);
app.use('/exercicio3', exercicio3);
app.use('/exercicio4', exercicio4);
app.use('/exercicio5', exercicio5);
app.use('/exercicio6', exercicio6);
app.use('/exercicio7', exercicio7);
app.use('/exercicio8', exercicio8);
app.use('/exercicio9', exercicio9);

// Iniciar o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
