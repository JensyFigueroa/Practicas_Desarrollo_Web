var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req, res, next) {
var novedades =  await novedadesModel.getNovedades();

  res.render('admin/novedades',{
      layout: 'admin/layout',
      usuario: req.session.nombre,
      novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar',{
      layout: 'admin/layout',
  });
});

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

/*----------- 3.- agregamos la GET de eliminar en la BD -----------*/
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedad(id);
  res.redirect('/admin/novedades');
});

/*----------- 5.- Primero que traiga la info de 1 sola novedad a los campos y luego hacemos el POST de la modificacion -----------*/
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  /* console.log(req.params.id); */
  var novedad = await novedadesModel.getNovedadById(id);

  res.render('admin/modificar', {
    layout:'/admin/layout',
    novedad
  });
});

/*----------- 11.- Hacemos el POST de la modificacion -----------*/
router.post('/modificar', async (req, res, next) =>{
  try {
    var obj = {
      titulo : req.body.titulo,
      subtitulo : req.body.subtitulo,
      cuerpo : req.body.cuerpo
    }
    /* console.log(obj); */

    await novedadesModel.updateNovedad(obj, req.body.id);
    res.redirect('/admin/novedades');
    
  } catch (error) {
    /* console.log(error); */
    res.render('admin/modificar', {
      layout: '/admin/layout',
      error: true,
      message: 'No se modifico la novedad'
    });
  }
});


module.exports = router;