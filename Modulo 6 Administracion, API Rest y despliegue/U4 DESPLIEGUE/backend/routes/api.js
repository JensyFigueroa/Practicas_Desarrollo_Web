 var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
var cloudinary = require('cloudinary').v2;

/* 1.- Se agrega los datos del servidor de correo en el archivo .env */
/* 2.- Instalamos la siguiente dependencia */
var nodemailer = require('nodemailer');

router.get('/novedades', async function(req, res, next) {
    let novedades =  await novedadesModel.getNovedades();
    
    novedades = novedades.map(novedades => {
      if (novedades.img_id) {
        const imagen = cloudinary.url(novedades.img_id, {
          width: 960,
          height: 200,
          crop: 'fill' /* pad */
        });
        return {
          ...novedades,
          imagen
        } 
      }
      else{  
        return {
          ...novedades,
          imagen: ''
        }
      }
    });
    
    res.json(novedades);
});

/* 3.- agregamos el POST de Contacto y seguimos en el frontend*/
router.post('/contacto', async (req, res) =>{
  const mail = {
    to: 'jensy1418@hotmail.com',
    subject: 'Contacto Web',
    html: `${req.body.nombre} se contacto a traves de la web y quiere más
    información a este correo: ${req.body.email}. <br> Además hizo el siguiente
    comentario: ${req.body.mensaje} <br> su telefóno es : ${req.body.telefono}`
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transport.sendMail(mail);
  res.status(201).json({
    error: false,
    message: 'Mensaje enviado'
  });
});

module.exports = router;