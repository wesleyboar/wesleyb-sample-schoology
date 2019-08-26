# Schoology Autofill Project

This is a Node web service of a code sample for Wesley B to Schoology.

This project contains the client web app **and** the server web API. It is also _(to be later)_ bundled in a single docker.

## Requirements

- [Node][nodejs] 10.X+ _(do **not** exceed LTS)_
    - [NPM](https://docs.npmjs.com/getting-started/installing-node#updating-npm) 6.X+ _(or latest available for given Node version)_
- DNS manipulation (see [Quick Start](#quick-start))
- (later) [Docker][docker]

## Quick Start

### Services

1. Install dependencies by running `npm install`.
    - _For CI/CD environments, run `npm ci`, instead._
1. Build and start the services by running `npm start`.

### DNS

The URLs in documentation and CLI output assume the established domain `animal.farm`.

To use these URLs, edit your DNS, or `/etc/hosts` file, to direct specific domains to `localhost:9000`.

Specific Domains:
- `animal.farm`
- `www.animal.farm`
- `api.animal.farm`
- `docs.animal.farm`

Hosts Example:
```
127.0.0.1	animal.farm
127.0.0.1	www.animal.farm
# 127.0.0.1	…
```

> **Warning**
>
> There is a real domain [https://www.animal.farm](https://www.animal.farm), so you will not have access to that website while these changes are in effect.

## Directories

These directories are manually maintained.

    ./
        |_ api             // source files of the server web API
        |_ client          // source files of the client web app
        |_ data            // data for the server web API

These directories are automatically maintained.

    ./
        |_ docs            // developer documentation for web services
        |_ node_modules    // node package installation
        |_ public          // user-facing static files for client web app

## Development

### Rules

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix comments.

### Commands

- Run commands from this (`./`) directory.
- Run command `npm install`¹ _at least once_ beforehand.

#### `npm start`

1. [`npm build`](#npm-build)
1. [`npm serve`](#npm-serve)

#### `npm build`

Perform fresh builds for all services.

#### `npm serve`

Run a local instance of the server.

#### `npm docs`

Compile documentation from all services.

#### `npm test`

Run tests from all services.

## Deployment

(Coming soon)

## Footnotes

1. For Windows, ensure that `node.exe` is on the `PATH` system variable.
2. Do **not** install dependencies globally.


[eslint]: https://eslint.org/ "ESLint"
[nodejs]: https://nodejs.org/ "Node.js"
[docker]: https://www.docker.com/ "Docker"