const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI ;
console.log(DB_URI)
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

