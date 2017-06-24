'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./server/routes');

//Render the client side application
app.use(express.static(__dirname + '/client'));

//used convert the body to json
app.use(bodyParser.json());

app.use(routes);

//Host the server
var server = app.listen(5000, function () {
    console.log('Node server is running..');
});



