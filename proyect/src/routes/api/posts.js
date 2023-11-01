//Lo primero que tenemos que hacer es importar el router
const router = require('express').Router();

//requerimos el controlador para poder trabajar con el y delegar las peticiones hacia el controlador
const PostsController = require('../../controllers/posts.controllers');

//requerimos el middleware para poder ser utilizado en las rutas
const { checkPostById } = require('../../middlewares/posts.middleware');

//Delegamos
router.get('/', PostsController.getAllPosts);
// si aplicamos tambien el Middleware al buscar un post by Id y no existe, esto nos lo gestionaría igualmente con una respuesta de no existe
router.get('/:postId', checkPostById, PostsController.getPostById);
router.post('/', PostsController.createPost);
//aplicamos el middleware a la ruta del put
router.put('/:postId', checkPostById, PostsController.updatePost);
//aplicamos el middleware a la ruta del delete
router.delete('/:postId', checkPostById, PostsController.deletePost);

// Por último exportamos el modulo
module.exports = router;
