
# Simple WPOAuth application

Simple application to show how WPAUth works.

## How to use

### 1 - Create a wpconn application

Go to [wordpress apps](https://developer.wordpress.com/apps) and
create an application to use to ask the oauth2 authorization.

### 2 - Create a setting json file

Create a `setting.json` file to configure the app. Copy the file structure
from setting_example.json file. It should be shomething like below:

```json
{
  "client_id": "<your client id here>",
  "client_secret": "<your client secret here>",
  "url":  {
    "redirect": "http://localhost/response"
  }
}
```
