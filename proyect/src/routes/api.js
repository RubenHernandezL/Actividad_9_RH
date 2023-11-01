//Lo primero que tenemos que hacer es importar el router
const router = require('express').Router();

//ahora tenemos que pasar a sus respectivas peticiones a las rutas que provengan con /api/posts y /api/autores
router.use('/posts', require('./api/posts'));
router.use('/autores', require('./api/autores'));

// Por último exportamos el modulo
module.exports = router;
