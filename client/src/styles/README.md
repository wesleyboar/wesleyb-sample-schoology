# WES Styles

Coming soon.

Follow ITCSS, BEM with Namespaces, Atomic Design, and KSS comments.

Use Parcel, PostCSS, and some CSS linter.

## Browser Support

See [`/.browserslistrc`](../../.browserslistrc).

## Notes

### Paths for Importing Stylesheets

### Globbing

Nope. I can glob via `postcss-easy-import`, but glob in `@import` is not standards-compliant future-proof code, while `postcss-import` is.

### Parcel

This bundler __indirectly__ parces PostCSS, and has these requirements:

- paths start with `styles/`
    - _(would be `/styles/`, but set in `package.json` config via `alias`)_
- `postcss.config.js` __must not__ use `postcss-imports` plugin
    - _(so Parcel and `postcss-import` do not conflict)_

### PostCSS

This tool __directly__ parces PostCSS, and has these requirements:

- paths start with `styles/`
    - _(would be `../../../`, but set in `postcss.config.js` via `path`)_
- `postcss.config.js` __must__ use `postcss-imports` plugin
    - _(so imported CSS is available to parse and apply)_
