const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.put('/:id', async(req, res)=>{
    const {title, description}= req.body;
    const taskUpdate = { title, description}
    await Task.findByIdAndUpdate(req.params.id, taskUpdate);
    
    res.json({
        status: '200',
        response: "Tarea actualizada correctamente",
        updated:{
            id:req.params.id,
            title:title,
            description:description
        }
    })
})



module.exports = router;