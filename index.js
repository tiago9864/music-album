var express = require('express');
var server = express();
var musicboxRouter = require('./server/routers/musicbox.router.js');
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;
var mongoose = require('mongoose');

mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('public/html/index.html', {root:__dirname});
});

server.use(musicboxRouter);

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
