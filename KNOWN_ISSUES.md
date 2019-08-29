1. Must not have two "source" files in `dist/docs/`.
    - _These hack files are coupled to the directory structure._
2. Must **not** use _one_ docker for _everything_.
    - _Should use one docker for each service, and one docker for building._
3. Must **not** use _one_ repository for _everything_.
    - _Ready to solve, because each service operates independent in its directory._
    - _If okay to rely on Node.js, then use `npm link`._
    - _Otherwise, use another solution, like `git submodules`._
4. Must improve Docker configuration, see `Dockerfile`'s:
    - `TODO`
    - `WARN`
    - `!!!`
5. Must act on service-specific known issues, see all services:
    - [`api/KNOWN_ISSUES.md`](./api/KNOWN_ISSUES.md)
    - [`client/KNOWN_ISSUES.md`](./client/KNOWN_ISSUES.md)
    - [`data/KNOWN_ISSUES.md`](./data/KNOWN_ISSUES.md)
6. Should allow custom values: `PORT`, `HOSTNAME`.
    - _Complex: `env_var` or `--build-arg` → `ARG`+`ENV` and/or `.env` → `REACT_APP_…`_
