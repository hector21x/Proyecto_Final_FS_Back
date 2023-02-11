const {
    saveStudentService,
    updateStudentService,
    deleteStudentService,
    findOneStudentService,
    findAllStudentService,
} = require('../service/user.js');

/**
 * Función usada para llamar al servicio
 * correspondiente para crear un nuevo estudiante
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const createUser = async (req, res) => {
    const {user_name, password, email} = req.body;
    const response = await saveStudentService( user_name, password, email );
    if (response !== "") {
        res.json({ user: response });
    } else {
        res.status(400).json({ error: "error when creating user" });
    }
};

/**
 * Función usada para llamar al servicio
 * correspondiente para actualizar un estudiante
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const updateUser = async (req, res) => {
    const { user_name, password, email } = req.body;
    const identification = req.params.identification;
    const response = await updateStudentService(identification, user_name, password, email);
    if (response > 0) {
        res.json({ message: "user updated successfully" });
    } else {
        res.status(400).json({ error: "error when updating user" });
    }
};

/**
 * Función usada para llamar al servicio
 * correspondiente para eliminar un estudiante
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const deleteUser = async (req, res) => {
    const identification = req.params.identification;
    const response = await deleteStudentService(identification);
    if (response > 0) {
        res.json({ message: "user deleted successfully" });
        res.status(200);
    } else {
        res.status(404).json({ message: "user not found" });
    }
};

/**
 * Función usada para llamar al servicio
 * correspondiente para buscar un estudiante
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const getUser = async (req, res) => {
    const identification = req.params.identification;
    const response = await findOneStudentService(identification);
    if (response.length > 0) {
        res.json({ response });
    } else {
        res.status(204).send();
    }
};

/**
 * Función usada para llamar al servicio
 * correspondiente para buscar todos los estudiantes
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const getUsers = async (req, res) => {
    const response = await findAllStudentService();
    if (response.length > 0) {
        res.json({ students: response });
    } else {
        res.status(204);
    }
};


module.exports = { getUser, getUsers, createUser, updateUser, deleteUser };