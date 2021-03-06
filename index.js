
/**
 * Module dependencies.
 */

var req = require('superagent');
var qs = require('querystring');
var debug = require('debug')('wpcom-oauth');

/**
 * Default options
 */

var def = require('./default.json');

/**
 * Options
 */

var globals;

/**
 * Class constructor
 *
 * @param {Object} options
 * @api public
 */

function WPOAuth(options){
  if (!(this instanceof WPOAuth)) return new WPOAuth(options);

  // Options
  this.opts = globals = options || {};
  for (var attr in def){
    this.opts[attr] = this.opts[attr] || def[attr];
  }

  this._code = this.opts.code;

  // Error exceptions
  if (!this.opts.client_id) {
    throw new Error('`client_id` is required');
  }

  if (!this.opts.client_secret) {
    throw new Error('`client_secret` is required');
  }
}

/**
 * Get url to connect
 *
 * @param {Object} [resource]
 * @param {Object} [param] query string vars
 * @api public
 */

WPOAuth.prototype.urlToConnect = function(resource, params){
  return WPOAuth.urlToConnect(resource, params);
};

/**
 * Set code to build the request for the oauth
 *
 * @param {String} code
 * @api public
 */

WPOAuth.prototype.code = function(code){
  this._code = code;
  debug('code: `%s`', this._code);
};

/**
 * Send request for token
 *
 * @param {Function} fn callback
 * @api public
 */

WPOAuth.prototype.requestAccessToken = function(fn){
  if ('undefined' == typeof this._code) {
    return fn(new Error('`code` is really needed'));
  }

  var data = {
    "client_id": this.opts.client_id,
    "client_secret": this.opts.client_secret,
    "redirect_uri": this.opts.url.redirect,
    "code": this._code,
    "grant_type": this.opts.grant_type
  };

  var url = this.opts.endpoint.request_token;

  req
  .post(url)
  .type('form')
  .send(data)
  .end(function (err, res) {
    if (err) return fn(err);

    // api error response
    if (res.body && res.body.error) {
      return fn(res.body);
    }

    fn(null, res.body);
  });
};

/**
 * Statics
 */

/**
 * Return URL to connect
 * 
 * @param {String} [resource]
 * @param {Object} [param] query string vars
 * @return {String} url link
 * @api public
 */

WPOAuth.urlToConnect = function(resource, params){
  if ('object' == typeof resource) {
    params = resource;
    resource = null;
  }
  params = params || {};

  params.response_type = globals.response_type;
  params.client_id = globals.client_id;
  params.redirect_uri = globals.url.redirect;

  if (resource && !params.blog) {
    debug('get url: %s', resource);
    params.blog = resource;
  }

  var link =  def.endpoint.authorize + '?' + qs.stringify(params);
  debug('url: `%s`', link);
  return link;
};

/**
 * expose `WPOAuth`
 */

module.exports = WPOAuth;
