# Schoology Autofill - Client Web App - KSS Node Configuration

See [KSS Node: Configuration](https://github.com/kss-node/kss-node#using-the-command-line-tool).

## Paths

- `source`
- `destination`
- `builder`
    - Relative to `kss.config.json`.

- `builder`
    - This is available via `npx kss --clone --builder=node_modules/kss/builder/twig src/styles/docs/kss-builder`, but without application styles (see `package.json`), we don't need to see the example markup.

- `homepage`
    - Relative to `source`.

- `css`
- `js`
    - Relative to `destination`.