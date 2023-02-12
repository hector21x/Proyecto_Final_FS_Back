const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const DB_URI = "mongodb+srv://hector21x:JU2811ra@cluster0.e7zgcel.mongodb.net/test";

mongoose.connect(DB_URI,{useNewUrlParser : true});


const connection= mongoose.connection;

connection.once("open", () => {
    console.log("DB  conectada");
})
