
/**
 * Module dependencies.
 */

var URL = require('url');
var express = require('express');
var WPOAuth = require('../');

/**
 * Get settings data
 */

var settings = require('./settings.json');

/**
 * Create a WPOAuth instance
 */

var wpoauth = WPOAuth(settings);

var pub = __dirname + '/public';
var app = express();
app.use(express.static(pub));

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

// homepage route
app.get('/', function(req, res){
  res.render('home', {
    settings: settings,
    url: wpoauth.urlToConnect()
  });
});

var redirectPath = URL.parse(wpoauth.opts.url.redirect).pathname;

// connect response route
// grab code query param
app.get(redirectPath, function(req, res){
  var code = req.query.code;
  res.render('ready', { code: code });
});

// access token route
app.get('/get_token/:code', function(req, res){
  // pass the code into settings parameters
  wpoauth.code(req.params.code);

  // request access token
  wpoauth.requestAccessToken(function(err, data){
    if (err) return res.render('error', err);
    res.render('ok', data);
  });
});

var port = settings.port || 3001;
app.listen(port);
console.log('WPOAuth app started on port %d', port);
