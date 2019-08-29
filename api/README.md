# Schoology Autofill - Server Web API

This is all the code for the API service logic.

It assumes the [Koa Web Framework][koa] is used by its consumer, so it exports a Koa middleware that has a `routes` function.

> **To Do**
>
> - Add unit tests.
> - Support version number in requests.
> - Support data format in requests.
> - Add API examples for more interfaces than just `curl`.
> - Auto-generate API documentation from a functional API definition.
> - Configure/support [ESLint]([eslint]).

## Requirements

- [Node][nodejs] `10.X`
    - [NPM](https://docs.npmjs.com/getting-started/installing-node#updating-npm) 6.X+ _(or latest available for given Node version)_

## Quick Start

1. Require the file's `koaRouter`.
2. Use the routes in the app (or through a middleware).

Example:
```javascript
const router = require('./api/main.js').koaRouter;

// Use directly
app.use( router.routes());
// Or via middleware
// subdomain.use( 'api', router.routes());
```

## Directories

These directories are manually maintained.

    ./
        |_ tutorials       // tutorials for the developer documentation

These directories are automatically maintained.

    ./
        |_ docs            // developer documentation for web services
        |_ node_modules    // node package installation

## Development

### Rules

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix comments.

### Commands

- Run commands from this (`./`) directory.
- Run command `npm install`¹ _at least once_ beforehand.

#### `npm docs`

Generate documentation from code comments and tutorials.

#### `npm test`

(Coming soon)

#### `npm watch`

Run commands as relevant files change.

## Footnotes

1. For Windows, ensure that `node.exe` is on the `PATH` system variable.
2. Do **not** install dependencies globally.


[eslint]: https://eslint.org/ "ESLint"
[nodejs]: https://nodejs.org/ "Node.js"
[koa]: https://koajs.com/ "Koa"
