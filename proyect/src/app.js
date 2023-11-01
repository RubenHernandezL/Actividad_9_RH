//Este archivo js es el que va a contener nuestr aplicación de Express
//comenzamos importando la librería de Express
const express = require('express');

//importamos la libreria de cors
const cors = require('cors');

//Creamos la app
const app = express();

//Configurar CORS para permitir peticiones desde cualquier dominio
app.use(cors());

//definimos para poder parsear jsons para poder utilizar los objetos entrante en JS
app.use(express.json());

//RUTAS
//Aqui dentro delegamos todas las peticiones que sean /api
app.use('/api', require('./routes/api'));

module.exports = app;