var express = require('express');
var router = express.Router();

/*-------- 3.- Requerimos del archivo novedadesModel.js de la carpeta models --------*/
var novedadesModel = require('../../models/novedadesModel');

/*-------- 4.- se agrega la funcion async para que no se quede pesando al momento de obtener los datos --------*/
router.get('/', async function(req, res, next) {
  /*-------- 5.- guardamos los datos que viene de la BD en una variable --------*/
var novedades =  await novedadesModel.getNovedades();

  /*-------- 6.- lo pasamos como una propiedad --------*/
  res.render('admin/novedades',{
      layout: 'admin/layout',
      usuario: req.session.nombre,
      novedades
  });
});

/*-------- 9.- Creamos GET de novedades que redireccione a views/admin/agregar.hbs --------*/
router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar',{
      layout: 'admin/layout',
  });
});

/*-------- 12.- Creamos POST de novedades que redireccione a views/admin/agregar.hbs --------*/
router.post('/agregar', async (req, res, next) => {
  try {
    if(req.body.titulo != "" && req.body.subtitulo != "" && req.body.cuerpo != ""){
      await novedadesModel.setNovedades(req.body);
      res.redirect('/admin/novedades')
    }
    else{
      req.redirect('/admin/agregar', {
        layout: 'admin/layout',
        error: true,
        message:'Todos los campos son requeridos'
      });
    }
  } catch (error) {
    console.log(error);
    req.render('admin/agregar', {
      layout: 'admin/layout',
        error: true,
        message:'No se cargo la novedad'
    })
  }
});

module.exports = router;