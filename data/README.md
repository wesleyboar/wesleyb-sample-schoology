# Schoology Autofill Project - Data

This is static server-side data storage for the web services.

> **Warning**
>
> The flat-file structure is adequate, but may not be ideal for a more robust API or more dynamic data. The following source of data have been considered:
> - an external list, committed to repo (static-ish, maintenance concern)
> - an API call, instead of local storage (dynamic, reliability concern)
> - the saved results of API call, committed to repo (dynamic-ish, cache complexity)
