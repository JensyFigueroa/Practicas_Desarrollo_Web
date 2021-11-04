/*  ------3. Copiamos lo mismo que el documento index.js------- */

var express = require('express');
var router = express.Router();

/*  ------8. Requerimos el archivo usuarioModels.js------- */
var usuariosModels = require('./../../models/usuarioModels');

/*  ------4. agregamos la propiedad layout y agregamos el archivo layout.hbs------- */
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login',{
      layout: 'admin/layout',
  });
});


/* ------ 24. Destruimos la Session------ */
router.get('/logout', function(req, res, next){
  req.session.destroy();
  res.render('admin/login',{
    layout:'admin/layout'
  });
});



/*  ------9. Creamos el metodo POST------- */
router.post('/', async(req, res, next) => {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    /* console.log(req.body); */

    var data = await usuariosModels.getUserByUsernameAndPassword(usuario,password);

    if(data != undefined){
      /*  ------20. Los datos ingresados los guardamos en variables de session------- */
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;

      res.redirect('/admin/novedades');
      console.log(req.body.password)
    }
    else{
      res.render('admin/login',{
        layout: 'admin/layout',
        error: true
      });
    }

  } catch (error) {
    console.log(error);
  }
});


module.exports = router;


 