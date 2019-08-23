# WES - Schoology Code Project

## Introduction

This is a Node web service of a code sample for Wesley B to Schoology.

This project contains the (future) client web app **and** the server web API. It is also (to be later) bundled in a single docker.

It uses [Node.js][nodejs] and (later) [Docker][docker].

### To Do

- Configure [ESLint][eslint].
- Add unit tests.

### Getting Started

- Read and obey all of the "Developer Rules" section.
- Read the "Quick Start" section to begin using this project.

## Developer Rules

- Use [PEP 350](https://www.python.org/dev/peps/pep-0350/) to prefix comments.

## Directory Structure

These directories are manually maintained.

    ./
       |_ api           // source files for the server web API

These directories are automatically maintained.

    ./
       |_ data          // data for the server web API
       |_ docs          // documentation (for now, server web API; later, also client web app)
       |_ public        // user-facing static files for client web app
       |_ node_modules  // node package installation

## Requirements

- [Node][nodejs] 10.X+ _(do **not** exceed LTS)_
    - [NPM](https://docs.npmjs.com/getting-started/installing-node#updating-npm) 6.X+ _(or latest available for given Node version)_

## Quick Start

Build optimized user-facing static content using the command most appropriate for your host:

- Node: `npm install --unsafe-perm && npm run start`¹

**The result is serving static files in `./dist`.**

> ¹ The `--unsafe-perm` flag is only necessary for running the command as root/sudo.

## Development

### Notice

To be effectual, the following commands:

- **must** be run from this (`./`) directory
- **must** have been preceeded by the command `npm install`¹ _at least once_

> ¹ If `npm install` produces an error that mentions `cannot run in wd`, you are likely trying to run the command as root/sudo. If so, add the flag `--unsafe-perm`.

### Commands

#### Start via `npm start`

Run a local instance of the web service.

## Deployment

### Initial Setup

…

### Commands

…

## Footnotes

1. For Windows, ensure that `node.exe` is on the `PATH` system variable.
2. Do **not** install dependencies globally.


[eslint]: https://eslint.org/ "ESLint"
[nodejs]: https://nodejs.org/ "Node.js"
[gitsubmod]: https://git-scm.com/docs/git-submodule "Git: Submodule"
[docker]: https://www.docker.com/ "Docker"