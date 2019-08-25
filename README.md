# Schoology Autofill Project

This is a Node web service of a code sample for Wesley B to Schoology.

This project contains the (future) client web app **and** the server web API. It is also (to be later) bundled in a single docker.

> **To Do**
>
> - Configure [ESLint][eslint].
> - Add unit tests.

## Requirements

- [Node][nodejs] 10.X+ _(do **not** exceed LTS)_
    - [NPM](https://docs.npmjs.com/getting-started/installing-node#updating-npm) 6.X+ _(or latest available for given Node version)_
- DNS manipulation (see [Quick Start](#quick-start))
- (later) [Docker][docker]

## Quick Start

### DNS

Edit your `/etc/hosts` file, or DNS, to direct `animal.farm` to `localhost` i.e.

```
127.0.0.1	api.animal.farm
127.0.0.1	api.docs.animal.farm
127.0.0.1	www.animal.farm
127.0.0.1	docs.animal.farm
127.0.0.1	animal.farm
```

> **Warning**
>
> There is a real domain [https://www.animal.farm](https://www.animal.farm), so you will not have access to that website while these changes are in effect.

### Server & Web API

1. `npm install`¹
    - _CI/CD should run `npm ci`, instead._
2. `npm start`
    - Build docs
    - Run tests (when available)
    - Serve web API

<small>

¹ If running the command as root, add the flag `--unsafe-perm`.

</small>

### Client Web App

(Coming soon)

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
        |_ tutorials       // documentation for web service modules

## Development

### Rules

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix comments.

### Commands

- Run commands from this (`./`) directory.
- Run command `npm install`¹ _at least once_ beforehand.

#### `npm start`

Run a local instance of the web API service.

## Deployment

(Coming soon)

## Footnotes

1. For Windows, ensure that `node.exe` is on the `PATH` system variable.
2. Do **not** install dependencies globally.


[eslint]: https://eslint.org/ "ESLint"
[nodejs]: https://nodejs.org/ "Node.js"
[gitsubmod]: https://git-scm.com/docs/git-submodule "Git: Submodule"
[docker]: https://www.docker.com/ "Docker"