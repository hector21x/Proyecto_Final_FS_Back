const app = require('./app.js');
require('./config/mongo.js');


const port = 3000;


app.listen(port, () => {
    console.log(`tu app esta escuchando por http://localhost:${port}`);
})