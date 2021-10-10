var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ingresar', function(req, res, next) {
  res.render('ingresar', { title: 'Cual es tu Nombre?' });
});

module.exports = router;
