# WordPress OAuth

[WordPress.com](http://wordpress.com) OAuth2 authorization module for
[Node.js](http://www.nodejs.org).

## Installation

```bash
$ npm install wpcom-oauth
```

## API

### WPOAuth#urlToConnect(resource)

Return the url that points to first step for get the access token.

### WPOAuth#code(code)

Set the code to request the access token.

### WPOAuth#requestAccessToken(fn)

Start the OAuth2 request to WordPress.com and execute the callback function when it's done.

## Simple example application

See the [example documentation](./example/Readme.md) to run the app

## License

MIT – Copyright 2014 Automattic
