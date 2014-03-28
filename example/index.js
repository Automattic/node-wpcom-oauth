
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

app.get('/', function(req, res){
  res.render('home', { setting: setting });
});

app.listen(3000);
console.log('WPOAuth app started on port 3000');
