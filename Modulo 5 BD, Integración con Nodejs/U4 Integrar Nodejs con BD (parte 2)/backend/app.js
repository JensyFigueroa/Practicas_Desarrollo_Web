var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*  ------5. Creamos el archivo .env y vincularlo en el app.js------- */
require('dotenv').config();

/*  ------16. Creamos la variable de session (bloquea acceso)------- */
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/*  ------1. Requerimos la ruta------- */
var loginRouter = require('./routes/admin/login');
/*  ------11. Requerimos la ruta------- */
var adminRouter = require('./routes/admin/novedades');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*  ------17. Palabra secreta------- */
app.use(session({
  secret: 'PW1234asdfg',
  resave: false,
  saveUninitialized: true
}));

/*  ------18. Se genera un codigo nuevo q' de acceso a novedades
si y solo si esta logueado------- */
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

app.use('/', indexRouter);
app.use('/users', usersRouter);

/*  ------2. Usamos la ruta------- */
app.use('/admin/login',loginRouter);

/*  ------12. Usamos la ruta------- */
/*  ------19. agregamos 'secure' para que nos deje acceder a novedades------- */
app.use('/admin/novedades', secure, adminRouter);

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
