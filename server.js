var express = require('express');
var routes = require('./routes/routes.js'); 
var app = express();
var http = require('http');
var morgan = require('morgan');

app.use(morgan('dev'));

// Define the view (templating) engine
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// Routes
app.get('/', routes.index);
app.put("/request/:building/:floornum/:roomnum/:loc/:descr", routes.addRequest);

// app.get('/recommendations/:operation', routes.mongo)

// Handle static files
app.use(express.static(__dirname + '/public'));


/*
 * OpenShift will provide environment variables indicating the IP 
 * address and PORT to use.  If those variables are not available
 * (e.g. when you are testing the application on your laptop) then
 * use default values of localhost (127.0.0.1) and 33333 (arbitrary).
 */
// var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
// var port      = process.env.OPENSHIFT_NODEJS_PORT || 50000;

// //  Start listening on the specific IP and PORT
// app.listen(port, ipaddress, function() {
// console.log('%s: Node server started on %s:%d ...',
//                Date(Date.now() ), ipaddress, port);
//                });

var ip = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1',
    port = process.env.OPENSHIFT_NODEJS_PORT || '4444';

app.listen(port, ip,function(){
	console.log('%s: Node server started on %s:%d ...',
               Date(Date.now() ), ip, port);});
