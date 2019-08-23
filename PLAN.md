# API

Document me (what I do, JSDoc, and a curl command).

## Endpoints

- `GET`: `/get`
- `GET`: `/get/…` _(where `…` is search term)_

## Dependencies

- **Node** for language
- **Koa** for service _(Express is overkill)_
    - build out such that easy to swap _(if you can guess tool similarities)_
- *maybe something* for API _(if manual with KOA proves cumbersome)_

## Storage

- `JSON`

# Server

Document me (how to run, use config file, whaat I do).

## Docker

### Tasks

- nginx
- create docker (or is it create a config?)
- run command
- serve dynamic API
- serve static files
- document

## Reference

- [Get started with Docker Desktop for Mac | Docker](https://docs.docker.com/docker-for-mac/)
- [nginx | Docker Official Images](https://hub.docker.com/_/nginx)

# Client

Document me (what I do, JSDoc, PEP0350).

## JavaScript

```
if hasValue
then (async) `GET` & populate, (async) GET & store
else (async is consistent and scalable, but not required) GET & populate & store

## Style

> **Page Title**
> Explanation of UX.
>
> [ giant search field 🔎 ]
> - results
> - minimal styling
> - but make it look nice
> - even if its only prettier browser default styles

## Markup

```
head
    …
    link[src="main.css"] // CSS: Use ITCSS & BEM
    script[src="main.css"]
body
    header
        h1
        p
    form[action][id="a"]
        // CSS: consider `appearance: input`
        input[type="search"][id="b"]
        datalist[for="b"]
```

# Estimate

Too Short: `1h`; Too Long: `5h`

- API: `1h`–
- Client: `1h`
- Server: `1h`
- Prep: `1h`–
- Document: `1h`
- Unit Test (Node & JavaScript): `1h`

Total: `4h`