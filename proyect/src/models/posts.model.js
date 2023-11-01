//importamos dayjs para que noa syude con las fechas y nos las introcuzca en el formato correcto
const dayjs = require('dayjs');

//Creamos los métodos que devuelven la promesa de la Query junto con los datos del autor
const selectAllPosts = () => {
    return db.query('SELECT posts.*, JSON_OBJECT("nombre", autores.nombre, "email", autores.email, "imagen", autores.imagen) AS autor FROM blog.posts INNER JOIN autores ON posts.autores_id = autores.id');
};

const selectPostById = (postId) => {
    return db.query('SELECT blog.posts.*, JSON_OBJECT("nombre", autores.nombre, "email", autores.email, "imagen", autores.imagen) AS autor FROM blog.posts INNER JOIN autores ON posts.autores_id = autores.id WHERE posts.id = ?', [postId]);
};

//creamos el metodo con la Query para poder recuperar todas las sedes cuyo id de autores coincida

const selectPostsByAutorId = (autorId) => {
    return db.query("SELECT * FROM blog.posts where autores_id = ?", [autorId]);
};

const selectAllPostsWithOutAutor = () => {
    return db.query('SELECT * FROM blog.posts');
};

const createPost = ({ titulo, descripcion, categoria, autores_id }) => {
    //gestionamos el valor de fecha_creación acá, ya que es un dato que se debe de colocar automaticamente, el usuario no debería de rellenarlo.
    const fecha_de_creacion = `${dayjs().format('YYYY-MM-DD HH:mm:ss')}`;
    return db.query('INSERT INTO blog.posts (titulo, descripcion, fecha_de_creacion, categoria, autores_id) value (?, ?, ?, ?, ?)', [titulo, descripcion, fecha_de_creacion, categoria, autores_id])
};

const updatePost = (postId, { titulo, descripcion, categoria, autores_id }) => {
    return db.query('UPDATE blog.posts SET titulo = ? , descripcion = ?, categoria = ?, autores_id = ? WHERE id = ?', [titulo, descripcion, categoria, autores_id, postId]);
};

const deletePost = (postId) => {
    return db.query('DELETE FROM blog.posts WHERE id= ?', [postId]);
};

//Exportamos las funciones
module.exports = { selectAllPosts, selectPostById, selectAllPostsWithOutAutor, selectPostsByAutorId, createPost, updatePost, deletePost };