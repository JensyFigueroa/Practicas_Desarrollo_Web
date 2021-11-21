var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* ------ 1 Se agregar en el la ruta CLOUDINARY_URL
al archivo .env  */

/* 2. se agrega los requiere de las librerias instaladas */
var fileUpload = require('express-fileupload');

/* 18-  requerimos CORS que el proyecto frontend pueda acceder a los recursos
de backend */
var cors = require('cors');

require('dotenv').config();

var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');

/* 19- creamos la ruta de la API */
var apiRouter = require('./routes/api');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'PW1234asdfg',
  resave: false,
  saveUninitialized: true
}));

secure = async(req, res, next) =>{
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario){
      next();
    }
    else{
      res.redirect('/admin/login');
    }
  } catch (error) {
      console.log(error);  
  }
}

/* 3- Cuando suban los archivos se crea un temporal */
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login',loginRouter);
app.use('/admin/novedades', secure, adminRouter);

/* 20- El cors va hacer como el middelware para poder pasar la info */
app.use('/api', cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
