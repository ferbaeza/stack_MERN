const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/', async (req, res)=>{
    const tasks = await Task.find()
        console.log(tasks);    
        res.json({
            'response': 'Ruta get Tasks',
            'data': tasks
        })
})

module.exports= router;