This is PoC project to show how to support SAML on a SonarQube instance exposed over a non-standard HTTPS port using a reverse proxy.

This project has a simple Node.js server that will respond with the request body it receives.

## Start the application

```
$ docker compose up
```

## Send a test request to mock endpoint

```
$ curl -X POST \
  http://localhost:8443/oauth2/callback/saml \
  -H 'Content-Type: application/json' \
  -d '{"url": "https://test.com:8443/oauth2/callback/saml"}'
```

Or use `test.http` with the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension.

See that the custom port :8443 has been removed from the payload, making the ACS valid for the SonarQube behind a proxy.