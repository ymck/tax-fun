const WEBSITE = '54.179.168.249';
const PORT = 8080;

var express = require('express');
var app = express();
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('index.jade');
});

app.get('/register', function(req, res) {
  res.render('register.jade');
});

app.get('/login', function(req, res) {
  res.render('login.jade');
});

app.get('/dashboard', function(req, res) {
  res.render('dashboard,jade');
});

app.listen(PORT, function(){
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://%s:%s", WEBSITE, PORT);
});


// test