/*  ------13. Copiamos lo mismo que el documento index.js------- */

var express = require('express');
var router = express.Router();
/*  ------14. agregamos la propiedad layout y agregamos el archivo layout.hbs------- */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades',{
      layout: 'admin/layout',
      
      /* ------ 22. Agregamos la propiedad de usuario para mostrar en novedades------ */
      usuario: req.session.nombre
  });
});

module.exports = router;