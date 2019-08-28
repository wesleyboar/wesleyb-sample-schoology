# Schoology Autofill

This is a Node web service of a code sample for Wesley B to Schoology.

This project contains the client web app **and** the server web API. It is also _(to be later)_ bundled in a single docker.

> **Known Issues**
> 1. There are two "source" files in `/dist/docs`.
>     - _These hack files are coupled to the directory structure._
> 1. Should **not** use _one_ docker for _everything_.
>     - _Should use one docker for each service, and one docker for building._
> 1. Should **not** use _one_ repository for _everything_.
>     - _Ready to solve, because each service operates independent in its directory._
>     - _If okay to rely on Node.js, then use `npm link`._
>     - _Otherwise, use another solution, like `git submodules`._
> 1. Misc. docker configuration issues, see `Dockerfile`'s:
>     - `TODO`
>     - `WARN`
>     - `!!!`
> 1. Misc. service-specific issues, see each top-level directory's `README.md`s:
>     - "To Do"
>     - "Warning"
>     - "Known Issues"

## Requirements

- [Docker][docker] 19.03.+
- manipulate DNS _(see [Quick Start: DNS](#dns))_

## Quick Start

### Services

1. Build image.
    ```
    docker build --tag wesb-school-autofill https://github.com/wesleyboar/wesleyb-sample-schoology.git
    ```
1. Run container.
    ```
    docker run --publish 9000:9000 wesb-school-autofill npm start
    ```

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

To run these commands, use one of these options:
- [run a docker and then run a command][docker-command-run]
- [execute a command on a running docker][docker-command-exec]

Example
```
# Run docker with command
docker run --publish 9000:9000 wesb-school-autofill  npm run docs
# Execute command on docker
docker exec wesb-school-autofill  npm run docs
```

### Node

Requirements:
- [Node.js][nodejs] v 10.X.+
- Run commands from this (`./`) directory.
- Run command `npm install`¹ _at least once_ beforehand.

#### `npm start`

1. [`npm build`](#npm-build)
1. [`npm serve`](#npm-serve)

#### `npm build(:cached)`

1. Install dependencies for service.
    - `npm build` will (re-)install all dependencies
    - `npm build:cached` will use available dependencies
2. Build service.
3. Repeat steps 1 and 2 for next service.

#### `npm serve`

Run the web server.

#### `npm docs`

Compile documentation from all services.

#### `npm test`

Run tests from all services.


[docker]: https://www.docker.com/ "Docker"
[docker-command-run]: https://docs.docker.com/engine/reference/commandline/run/ "Docker: run"
[docker-command-exec]: https://docs.docker.com/engine/reference/commandline/exec/ "Docker: exec"
