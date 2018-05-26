var createError = require('http-errors');
import compression from "compression";
import express from 'express';
import path from 'path';
var logger = require('morgan');

var app = express();

app.use(compression());
app.use(logger('dev'));

// browser-sync Setup 
if (app.get('env') == 'development') {
  var browserSync = require('browser-sync');
  var connectBrowserSync = require('connect-browser-sync');

  var browserSyncConfigurations = { "files": path.join(__dirname, "./public/*") };
  app.use(connectBrowserSync(browserSync(browserSyncConfigurations)));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../sample')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.use(function (req: express.Request, res: express.Response, next: Function) { next(createError(404)) });

app.use(function (err: any, req: express.Request, res: express.Response, next: Function) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
