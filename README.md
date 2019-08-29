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
> 1. Should allow custom values: `PORT`, `HOSTNAME`.
>     - _Complex: `env_var` or `--build-arg` → `ARG`+`ENV` and/or `.env` → `REACT_APP_…`_
> 1. There are misc. docker configuration optimizations to make, see `Dockerfile`'s:
>     - `TODO`
>     - `WARN`
>     - `!!!`
> 1. There are misc. service-specific known issues, see each top-level directory's `README.md`s:
>     - "To Do"
>     - "Warning"
>     - "Known Issues"

## Requirements

- [Docker][docker] 19.X
- manipulate DNS _(see [Quick Start: DNS](#dns))_

## Quick Start

### Services

1. Build image (also installs app dependencies).
    ```
    docker build  --tag wesb-school-autofill-image \
                  --build-arg port=9000 \
                  --build-arg hostname=animal.farm \
                  https://github.com/wesleyboar/wesleyb-sample-schoology.git
    ```
1. Run container, then serve app.
    ```
    docker run --hostname animal.farm --publish 9000:9000 --name wesb-school-autofill-container wesb-school-autofill-image   npm run serve
    ```

### DNS

The URLs in documentation and CLI output assume the established domain `animal.farm`.

To use these URLs, edit your DNS, or `/etc/hosts` file, to direct specific domains to `localhost:9000`.

Example via `/etc/hosts`:
```
127.0.0.1	animal.farm
127.0.0.1	www.animal.farm
127.0.0.1	api.animal.farm
127.0.0.1	docs.animal.farm
```

> **Warning**
>
> There is a real domain [https://www.animal.farm](https://www.animal.farm), so you will not have access to that website while these changes are in effect.

## Directories

These directories are manually maintained.

    ./
        |_ api           // source files of the server web API
        |_ client        // source files of the client web app
        |_ data          // data for web server and web API

These directories are automatically maintained.

    ./
        |_ docs          // developer documentation for web services
        |_ node_modules  // node package installation
        |_ public        // user-facing static files for client web app

## Development

### Rules

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix comments.

### Commands

These commands require Node. For help running the commands locally or on the Docker, see [Commands: on Local](#on-local) or [Commands: on Docker](#on-docker).

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

#### on Docker

Known Methods:
1. [Run container image with initial command.][docker-command-run]
    ```
    docker run --hostname animal.farm --publish 9000:9000 --name wesb-school-autofill-container wesb-school-autofill-image   your command
    ```
2. [Execute command on running docker container.][docker-command-exec]
    ```
    docker exec wesb-school-autofill-container   your command
    ```
3. [Enter bash shell on running docker container.][docker-command-exec]
    ```
    docker exec --interactive --tty wesb-school-autofill-container   bash
    ```

#### on Local

Requirements:
- [Node.js][nodejs] `10.X`
- Run commands from this (`./`) directory.
- Run command `npm install`¹ _at least once_ beforehand.

[nodejs]: https://nodejs.org/ "Node.js"
[docker]: https://www.docker.com/ "Docker"
[docker-command-cp]: https://docs.docker.com/engine/reference/commandline/cp/ "Docker: cp"
[docker-command-run]: https://docs.docker.com/engine/reference/commandline/run/ "Docker: run"
[docker-command-exec]: https://docs.docker.com/engine/reference/commandline/exec/ "Docker: exec"
