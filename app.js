const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const directorsRouter = require('./routes/directors');
const genresRouter = require('./routes/genres');
const moviesRouter = require('./routes/movies');
const actorsRouter = require('./routes/actors');
const membersRouter = require('./routes/members');
const copiesRouter = require('./routes/copies');
const bookingsRouter = require('./routes/bookings');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/directors', directorsRouter);
app.use('/genres', genresRouter);
app.use('/movies', moviesRouter);
app.use('/actors', actorsRouter);
app.use('/members', membersRouter);
app.use('/copies', copiesRouter);
app.use('/bookings', bookingsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
