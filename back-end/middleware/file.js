const multer = require('multer');

//metodo para subir un archivo

const uploadfile = () => {
    const storage = multer.diskStorage({
        destination: '../libros/files',
    
        filename: function (_req, file, cb) {
            const extension = file.originalname
            cb(null, extension);
        }
    })
    
    const upload = multer({ storage: storage }).single('file');

    return upload;
}

module.exports = uploadfile;