const app = require('./app.js');
const mongoDBConnect = require('./config/mongo.js');


mongoDBConnect();

const port = 3000;


app.listen(port, () => {
    console.log(`tu app esta escuchando por http://localhost:${port}`);
})