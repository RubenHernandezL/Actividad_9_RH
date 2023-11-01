//Importamos el model de autores
const AutoresModel = require('../models/autores.model.js');

//imsportamos el model de posts para poder recuperar los todos los posts de un autor específico
const PostsModel = require('../models/posts.model.js');

//Dentro de los controladores colocamos los metodos manejadores
//GET
const getAllAutores = async (req, res) => {
    try {
        const [result] = await AutoresModel.selectAllAutores();
        res.json(result);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

// se crea el metodo controlador para que se puedan recuperar todos los posts de un autor específico
const getPostsByAutor = async (req, res) => {
    try {
        const autorId = req.params.autorId;
        const [autor] = await AutoresModel.selectAutorById(autorId);
        const [posts] = await PostsModel.selectPostsByAutorId(autorId);
        autor[0].posts = posts;
        res.json(autor[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};


const getAutorById = async (req, res) => {
    try {
        //recuperamos el id de la ruta
        const autorId = req.params.autorId;
        const [result] = await AutoresModel.selectAutorById(autorId);
        res.json(result[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//POST
const createAutor = async (req, res) => {
    try {
        //recuperamos el body de la ruta
        const post = req.body;
        const [result] = await AutoresModel.createAutor(post);
        const [newAutor] = await AutoresModel.selectAutorById(result.insertId);
        res.json(newAutor[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//PUT
const updateAutor = async (req, res) => {
    try {
        //recuperamos el ID de la ruta
        const autorId = req.params.autorId;
        //recuperamos el body (lo que queremos cambiar)
        const post = req.body;
        const [result] = await AutoresModel.updateAutor(autorId, post);
        const [updatedAutor] = await AutoresModel.selectAutorById(autorId);
        res.json(updatedAutor[0]);
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

//DELETE
const deleteAutor = async (req, res) => {
    try {
        //recuperamos el ID de la ruta
        const autorId = req.params.autorId;
        const [result] = await AutoresModel.deleteAutor(autorId);
        //creamos un mensaje que pueda ser representado con 2 clave valor el primero que haga referencia a lo que queremos indicarle al front y la otra con la respuesta de la acción.
        res.json({ Message: "El Autor ha sido borrado", Response: JSON.stringify(result) });
    } catch (error) {
        res.json({ ERROR: error.message });
    };
};

module.exports = { getAllAutores, getPostsByAutor, getAutorById, createAutor, updateAutor, deleteAutor };