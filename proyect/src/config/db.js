//Comenzamos requiriendo la libreria de mysql2
const mysql = require('mysql2');

//Creamos los pool de conexiones de nuestra BD, al cual le pasamos un objetos con los datos d enuestra bd
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
});

//creamos una variable global que trabajará por promesas para poder ser utilizado en todos los ámbitos
global.db = pool.promise();
