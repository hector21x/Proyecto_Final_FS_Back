'use strict';
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const DB_URI = "mongodb://localhost:3000";


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
