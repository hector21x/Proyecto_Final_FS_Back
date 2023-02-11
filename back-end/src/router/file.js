const express = require('express');
const uploadfile = require('../../middleware/file.js');


const routerFile = express.Router();

//router para el archivo

routerFile.post('/uploadFile', uploadfile(), (req, res) => {
    const nombre = req.file.originalname
    console.log(req.file);
    res.send('El libre ' + nombre + ' fue agregado');
});


module.exports = routerFile;