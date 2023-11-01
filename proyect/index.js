//Este va a ser nuestro archivo qeu sirva como servidor, es el que va a correrlo y levantarlo en la ip correspondiente

// Primero nos traemos el modulo de http para la gestión de las rutas y poder delegar.
const http = require('http');

//requerimos la aplicación para 
const app = require('./src/app');

// Requerimos y configuramos dotenv
require('dotenv').config();

//Configuramos la base de datos
require('./src/config/db');

// Creamos un servidor con express
const server = http.createServer(app);

//tenemos que poner a escuchar a nuestro servidor en un puerto y para ello comenzamos creando el puesrto asociandolo al.env y si no dantole un valor preestablecido
const PORT = process.env.PORT ?? 3000;

//ponemos el servidor a escuchar peticione en el servidor indicado
server.listen(PORT);

//Para probar si funciona le colocamos el .on
server.on('listening', () => {
    console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
//gestionamos el error
server.on('error', (error) => {
    console.log(error);
});