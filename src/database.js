const mongoose = require('mongoose');

const DB_URI = require('./settings/atlas_settings');

/**
 * Conexion MongoDB Atlas
 */
 const dbConnect =()=>{
    mongoose.connect(
    DB_URI, 
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


module.exports = dbConnect;