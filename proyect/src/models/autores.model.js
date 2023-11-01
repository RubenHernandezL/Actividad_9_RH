//Creamos los métodos que devuelven la promesa de la Query
const selectAllAutores = () => {
    return db.query('SELECT * FROM blog.autores');
};

const selectAutorById = (autorId) => {
    return db.query('SELECT * FROM blog.autores where id = ?', [autorId]);
};

const createAutor = ({ nombre, email, imagen }) => {
    return db.query('INSERT INTO blog.autores (nombre, email, imagen) values (?, ?, ?)', [nombre, email, imagen]);
};

const updateAutor = (autorId, { nombre, email, imagen }) => {
    return db.query('UPDATE blog.autores SET nombre = ?, email = ?, imagen = ? WHERE id = ?', [nombre, email, imagen, autorId]);
};

const deleteAutor = (autorId) => {
    return db.query('DELETE FROM blog.autores WHERE id = ?', [autorId]);
};

//Exportamos las funciones
module.exports = { selectAllAutores, selectAutorById, createAutor, updateAutor, deleteAutor };