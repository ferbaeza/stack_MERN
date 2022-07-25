<<<<<<< HEAD
const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI ;
console.log(DB_URI)
const dbConnect =()=>{
    mongoose.connect(
        DB_URI,
=======
const mongoose = require('mongoose');

const DB_URI = require('./atlas_settings');

/**
 * Conexion MongoDB Atlas
 */
 const dbConnect =()=>{
    mongoose.connect(
    DB_URI, 
>>>>>>> develop
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    );
}


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
console.log("Connected successfully");
});


<<<<<<< HEAD
module.exports = dbConnect;

=======
module.exports = dbConnect;
>>>>>>> develop
