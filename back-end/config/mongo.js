const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const DB_URI = "mongodb+srv://ninigo93:ni37457005@cluster0.bkgyget.mongodb.net/test";

mongoose.connect(DB_URI,{useNewUrlParser : true});


const connection= mongoose.connection;

connection.once("open", () => {
    console.log("DB  conectada");
})
