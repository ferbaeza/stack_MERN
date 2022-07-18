const express = require('express');
const router = express.Router();

const Task = require('../models/task')

router.get('/:id', async (req, res)=>{
    const task = await Task.findById(req.params.id)
        console.log(task);    
        res.json({
            'response': 'Ruta get Tasks',
            'data': task
        })
})

module.exports= router; 