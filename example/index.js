
/**
 * Module dependencies.
 */

var express = require('express');
var WPOAuth = require('../');

/**
 * Get setting data
 */

var setting = require('./setting.json');

/**
 * Create a WPOAuth instance
 */

var wpoauth = WPOAuth(setting);

// setup middleware

var pub = __dirname + '/public';
var app = express();
app.use(express.static(pub));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// homepage route
app.get('/', function(req, res){
  res.render('home', {
    setting: setting,
    url: wpoauth.urlToConnect()
  });
});

// connect response route
app.get('/connect/res', function(req, res){
  // get the code from que querystring
  var code = req.query.code;

  // pass the code into setting parameters
  setting.code = code;

  // create a connect oauth instance
  var wpoauth = WPOAuth(setting);

  // request access token
  wpoauth.requestAccessToken(function(err, data){
    if (err) return res.render('error', err);
    res.send(data);
  });
});

app.listen(3000);
console.log('WPOAuth app started on port 3000');
