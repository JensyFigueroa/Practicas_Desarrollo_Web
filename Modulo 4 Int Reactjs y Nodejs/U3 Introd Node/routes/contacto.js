var express = require('express');
var router = express.Router();

router.get('/contacto',(req,res,next)=>{
    res.render('contacto', {title:'Contacto'})
});

module.exports = router;