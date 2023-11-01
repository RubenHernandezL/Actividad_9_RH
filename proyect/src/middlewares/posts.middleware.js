// Requerimos el modelo para las comprobaciones en las bases de datos.
const PostsModel = require('../models/posts.model');
// Se va a gestionar el delete y put para que la respuesta sea negativa o positiva con un middleware creando el metodo correspondiente.
const checkPostById = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const [post] = await PostsModel.selectPostById(postId);
        //atacamos con un condicional apra determinar si este post existe antes de eliminarlo o actualizarlo
        if (post.length === 0) {
            return res.json({ ERROR: "El post no existe" });
        } else {
            next();
        }
    } catch (error) {
        res.json({ ERROR: error.massage });
    };
};

module.exports = { checkPostById };