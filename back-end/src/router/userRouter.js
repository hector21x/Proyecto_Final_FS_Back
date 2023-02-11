const { Router } = require('express');
const router = Router();

const { saveUserController, loginController } = require('../controller/userController');

//router para crear usuario

router.post("/users/signup", saveUserController);
router.post("/users/signin", loginController);


module.exports = router;