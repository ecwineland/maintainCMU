var express = require('express'),
    routes = require('./routes'),
    http = require('http');

var app = express();

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.logger('tiny'));
  app.use(app.router);
  app.use(express.errorHandler());
  });

app.get('/', routes.index);
app.get('/request', routes.mongo)

http.createServer(app).listen(4444);
console.log("Express server listening on port 4444");

