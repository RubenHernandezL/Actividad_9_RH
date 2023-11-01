//Importamos el model
const PostsModel = require('../models/posts.model');

//Dentro de los controladores colocamos los metodos manejadores
//GET
const getAllPosts = async (req, res) => {
    try {
        const [result] = await PostsModel.selectAllPosts();
        res.json(result);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

const getPostById = async (req, res) => {
    try {
        //recuperamos el id de la ruta
        const postId = req.params.postId;
        const [result] = await PostsModel.selectPostById(postId);
        res.json(result[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//POST
const createPost = async (req, res) => {
    try {
        //Recuperamos el body (lo que queremos cambiar)
        const post = req.body;
        const [result] = await PostsModel.createPost(post);
        const [newPost] = await PostsModel.selectPostById(result.insertId);
        res.json(newPost[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//PUT
const updatePost = async (req, res) => {
    try {
        //recuperamos el ID de la ruta
        const postId = req.params.postId;
        //recuperamos el body (lo que queremos cambiar)
        const post = req.body;
        const [result] = await PostsModel.updatePost(postId, post);
        const [updatedPost] = await PostsModel.selectPostById(postId);
        res.json(updatedPost[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//DELETE
const deletePost = async (req, res) => {
    try {
        //recuperamos el ID de la ruta
        const postId = req.params.postId;
        const [result] = await PostsModel.deletePost(postId);
        //creamos un mensaje que pueda ser representado con 2 clave valor el primero que haga referencia a lo que queremos indicarle al front y la otra con la respuesta de la acción.
        res.json({ Message: "El Post ha sido borrado", Response: JSON.stringify(result) });
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };