const { registerService, loginService } = require('../service/userService.js');


/**
 * Función usada para llamar al servicio
 * correspondiente para crear un nuevo usuario
 * @param {*HttpRequest} req
 * @param {*HttpResponse} res
 */
const saveUserController = async (req, res) => {
    const { user_name, password, email } = req.body;
    const response = await registerService(user_name, password, email);
    res.json({ response: response });

};

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const response = await loginService(email, password);
    if (response !== "") {
        res.json({ user_name: response })
    } else {
        res.status(404).json({ error: "error not found" })

    }
}

module.exports = { saveUserController, loginController };