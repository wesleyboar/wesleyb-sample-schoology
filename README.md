# Schoology Autofill

This is a Node web service of a code sample for Wesley B to Schoology.

This project contains the client web app **and** the server web API. It is also bundled in a single docker.

## Requirements

- [Docker][docker] 19.X
- manipulate DNS _(see [Quick Start: DNS](#dns))_

## Quick Start

### Services

1. Build image (also installs app dependencies).
    ```
    docker build --tag wesb-school-autofill-image https://github.com/wesleyboar/wesleyb-sample-schoology.git
    ```
1. Run container, then start all services.
    ```
    docker run --hostname animal.farm --publish 9000:9000 --name wesb-school-autofill-container wesb-school-autofill-image   npm run serve
    ```
1. Open relevant URL from final output on the command line.

### DNS

The domain `animal.farm`, and [some subdomains](#example-etchosts), are **required** _(and not yet configurable)_. They are assumed to be functional by:
1. API call in client app
2. CORS solution on server
3. CLI instructional output
4. URLs in documentation

To use these URLs, edit the DNS or `/etc/hosts` file on the local host, so that specific domains are directed to `localhost` i.e. `127.0.0.1`.

#### Example (`/etc/hosts`)
```
127.0.0.1	animal.farm
127.0.0.1	www.animal.farm
127.0.0.1	api.animal.farm
127.0.0.1	docs.animal.farm
```

> **Warning:**
> There is a real domain [https://www.animal.farm](https://www.animal.farm). You will not have access to that website while these changes are in effect.

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

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix relevant comments.

### Commands

Separate instructions exist for running these commands:
- [Commands: on Local Host](#on-local-host)
- [Commands: on Docker](#on-docker)

#### `npm start`

1. [`npm build`](#npm-build)
1. [`npm serve`](#npm-serve)

#### `npm build(:cached)`

1. Install dependencies for service.
    - `npm build` will (re-)install all dependencies
    - `npm build:cached` will use available dependencies
2. Build service.
3. Repeat steps 1 and 2 for next service.

#### `npm serve(:docs)`

Run a web server.
- `npm serve` will run a prodcution web server for all services
- `npm serve:docs` will run an ad-hoc server for documentation

#### `npm docs(:api|:client)`

Compile documentation.
- `npm docs` will compile documentation for all services
- `npm docs:api` will compile documentation for server API only
- `npm docs:client` will compile documentation for client app only

#### `npm test`

Run tests from all services.

#### on Docker

Known Methods:
1. Run container image with initial command.
    ([more info][docker-command-run])
    ```
    docker run --hostname animal.farm --publish 9000:9000 --name wesb-school-autofill-container wesb-school-autofill-image   your command
    ```
2. Execute command on running docker container.
    ([more info][docker-command-exec])
    ```
    docker exec wesb-school-autofill-container   your command
    ```
3. Enter bash shell on running docker container.
    ([more info][docker-command-exec])
    ```
    docker exec --interactive --tty wesb-school-autofill-container   bash
    ```

#### on Local Host

Requirements:
- [Node.js][nodejs] `10.X`
- Run commands from this (`./`) directory.
- Run command `npm install` _at least once_ beforehand.

[nodejs]: https://nodejs.org/ "Node.js"
[docker]: https://www.docker.com/ "Docker"
[docker-command-cp]: https://docs.docker.com/engine/reference/commandline/cp/ "Docker: cp"
[docker-command-run]: https://docs.docker.com/engine/reference/commandline/run/ "Docker: run"
[docker-command-exec]: https://docs.docker.com/engine/reference/commandline/exec/ "Docker: exec"
