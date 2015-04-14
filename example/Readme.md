
# Simple WPOAuth application

Simple application to show how WPAuth works.

## How to use

### 1 - Create a WordPress application

Go to [wordpress apps](https://developer.wordpress.com/apps) and
create your application to use to get the oauth access token.

### 2 - Create a settings file

In the `example/` folder copy `settings_example.json` to `settings.json` and
customize as needed.  Your `settings.json` file should look something like
this:

```json
{
  "client_id": "<your client id here>",
  "client_secret": "<your client secret here>",
  "url":  {
    "redirect": "http://localhost:3001/connect/res"
  }
}
```

Other settings that you can change, if needed:

- `port` - if you need to change the default port to something else.  Don't
  forget to update your `url.redirect` setting too.

### 3 - Update dependencies

From the `example/` folder, download and install the npm dependencies:

```cli
$ npm install
```

### 4 - Run the application

```cli
$ node index.js
```
