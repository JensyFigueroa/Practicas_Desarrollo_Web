var express = require('express');
var router = express.Router();

router.get('/nosotros',(req,res,next)=>{
    res.render('nosotros',{title: 'Nosotros'});
});

module.exports = router;

