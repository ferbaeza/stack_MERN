const express = require('express');
const router = express.Router();
const Task = require('../models/task')

router.post('/', async(req, res)=>{
    //console.log(req.body)
    const {title, description}= req.body;
    const newtask = new Task ({ title, description})
    await newtask.save();
    res.json({
        status: '200',
        response: "recibido correctamente",
        data: newtask
    })
})



module.exports = router;