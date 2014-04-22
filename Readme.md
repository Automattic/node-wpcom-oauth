# WordPress OAuth

  [Node.js][] module to get OAuth token from [WordPress.com][].


## Installation

```bash
$ npm install wpcom-oauth
```

## API

### WPOAuth#urlToConnect(resource)

return the url that points to first step for get the access token.

### WPOAuth#setCode(code)

Set the needed code to request the access token.

### WPOAuth#requestAccessToken(fn)

Start the OAuth2 request to WordPress.com and execute the callback function when it's done.

## Simple example application

See the [example documentation](./example/Readme.md) to run the app

```cli
$ npm install
```

... and then run the application

```cli
$ node index.js
```

## License

MIT – Copyright 2014 Automattic
