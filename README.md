## Assumptions

- For the sake of time:
  - Mapbox has not been integrated although on location by id page there is placeholder
  - Forms have been trimmed down to only a few attributes
  - Validation is not extensive
- Some APIs are malformed - don't have complete information about their fields

  - In such cases I've assumed values
  - For eg. for types I've just sorted them in `null` & not `null`
  - Search works only fetched functions and is not API based

- I've stored tenant in the env - ideally would prefer to get this by httpOnly cookies or depending on use case save in state (either URL or react state)

## .env

These are the variables for .env (Same as the values I have received)

```
VITE_GQL_TOKEN=
VITE_BASE_URL=
VITE_TEMP_TENANT=
```
