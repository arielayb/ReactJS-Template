'use strict';

const http = require('http');
const express = require('express');
var path = require("path");
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);
var zmq = require('zeromq') , sock = zmq.socket('pub');

// Create the app, setup the webpack middleware
const app = express();
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
}));

// paths are loaded below:
app.use(express.static(path.join(__dirname, '/')));

app.get('/.*/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

/******************************************************/

/*******************************************************/

// Middleware functionality between backend and frontend are below

app.post('/api/load', function (req, res){
  console.log("hiya, Ariel");
  sock.connect('tcp://192.168.0.3:5555');
  console.log('Producer bound to port 5555');
  
  setInterval(function(){
    console.log('sending work');
    sock.send('some work');
  }, 500);
    
});

app.get('/api/recv', function(){


});

/***************************************************/

// Server listening on either the environment port or
// the provided port, 9000
const server = new http.Server(app);
const PORT = process.env.PORT || 9000;

server.listen(PORT);
