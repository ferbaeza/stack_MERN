const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.json(
        {response:"Hello fer"
    });
});

module.exports = router;