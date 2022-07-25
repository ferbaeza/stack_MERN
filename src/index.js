const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
require ('dotenv').config();
const dbConnect = require('./settings/database')


//Settings
/**
 **const port = process.env.PORT || 3000 
 */

app.set('port', process.env.PORT || 3000);


//Middleware
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api',require('./routes/index'));


//StaticFiles
/**
 * * Al usar el metodo join, conseguimos hacer nuestro path multiplataforma
 * console.log(path.join(__dirname, 'public'))   
 */

app.use(express.static(path.join(__dirname, 'public')))


//Server
app.listen(app.get('port'), ()=>{
    console.log(`Servidor arrancado en puerto ${app.get('port')}`)
})


dbConnect();