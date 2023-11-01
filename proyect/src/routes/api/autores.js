//Lo primero que tenemos que hacer es importar el router
const router = require('express').Router();

//requerimos el controlador para poder trabajar con el y delegar las peticiones hacia el controlador
const AutoresController = require('../../controllers/autores.controllers');

//requerimos el Middleware para poder ser utilizado en las rutas
const { checkAutorById } = require('../../middlewares/autores.middlewares');

//Delegamos
router.get('/', AutoresController.getAllAutores);
// si aplicamos tambien el Middleware al buscar un post by Id y no existe, esto nos lo gestionaría igualmente con una respuesta de no existe
router.get('/posts/:autorId', checkAutorById, AutoresController.getPostsByAutor);
router.get('/:autorId', checkAutorById, AutoresController.getAutorById);
router.post('/', AutoresController.createAutor);
//aplicamos el Middleware en la ruta del put
router.put('/:autorId', checkAutorById, AutoresController.updateAutor);
//aplicamos el Middleware en la ruta del delete
router.delete('/:autorId', checkAutorById, AutoresController.deleteAutor);


// Por último exportamos el modulo
module.exports = router;
