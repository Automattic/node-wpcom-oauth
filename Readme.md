
# Wordpress OAuth authentication

  node.js module to connect your application with wordpress.com

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
