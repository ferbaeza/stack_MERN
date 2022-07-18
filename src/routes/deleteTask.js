const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.delete('/:id', async(req, res)=>{
    const data = req.body;
    await Task.findByIdAndRemove(req.params.id);
    
    res.json({
        status: '200',
        response: "Tarea eliminada correctamente",
        deleted:{
            id:req.params.id,
            data:data,
        }
    })
})



module.exports = router;