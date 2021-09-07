web: node app.js

//app.js
var express =  require('express');
var app      = express();
var http = require('http').Server(app);

http.listen(process.env.PORT || 8888, function(){
  console.log('listening on *:8888');
});