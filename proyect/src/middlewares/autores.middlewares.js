// Requerimos el modelo para las comprobaciones en las bases de datos.
const AutoresModel = require('../models/autores.model');
// Se va a gestionar el delete y el put, para que la respuesta sea negativa o positiva con un middleware creando el metodo correspondiente.
const checkAutorById = async (req, res, next) => {
    const { autorId } = req.params;
    try {
        const [autor] = await AutoresModel.selectAutorById(autorId);
        //atacamos con un condicional apra determinar si este post existe antes de eliminarlo o actualizarlo
        if (autor.length === 0) {
            return res.json({ ERROR: "El autor no existe" });
        } else {
            next();
        }
    } catch (error) {
        res.json({ ERROR: error.massage });
    };
};

module.exports = { checkAutorById };
