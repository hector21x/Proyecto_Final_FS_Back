'use strict';
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const DB_URI = "mongodb+srv://ninigo93:ni37457005@cluster0.bkgyget.mongodb.net/test";


module.exports = () => {
    const mongoDBConnect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if (err) {
                    console.log('DB ERROR')
                } else {
                    console.log('conexion correcta')
                }
            }
        )
    }
    mongoDBConnect();
};
