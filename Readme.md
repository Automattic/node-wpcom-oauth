
# Wordpress OAuth authentication

  node.js module to connect your application with wordpress.com


## How to use

### 1 - Create a wpconn application

Go to [wordpress apps](https://developer.wordpress.com/apps) and
create an application to use to ask the oauth2 authorization.

### 2 - Create the WPOAuth instance

```js
var WPOAuth = require('wp-oauth');
var config = {
  "client_id": "<your client id>",
  "client_secret": "<your access token>",
  "url":  {
    "redirect": "<redirect uri>"
  }
}

// `redirect uri` is the uri in your app where the code (into the querystring) will be gotten.

var wpoauth = WPOAuth(config);
```

## API

### WPOAuth#urlToConnect(resource)

return a string with the url that points to first step for get the oauth
connection.

### WPOAuth#setCode(code)

Set the needed code to request the access token.

### WPOAuth#requestAccessToken(fn)

Start the OAuth2 request to wordpress.com. The method execute callback function
when it's done.

## Example

Into `example/` folder download the npm dependencies:

```cli
$ npm install
```

... and then run the application

```cli
$ node index.js
```

## License

MIT – Copyright 2014 Automattic
