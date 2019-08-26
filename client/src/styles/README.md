# SCHOOLOGY Styles

Follow ITCSS, BEM with Namespaces, Atomic Design, and KSS comments.

> **To Do**
>
> - Add a CSS linter.
> - Support absolute paths.

## Browser Support

See [`/client/package.json` @ `browserslist`](../../client/package.json).

## Notes

### Paths for Importing Stylesheets

### Globbing

Nope. I can glob via `postcss-easy-import`, but glob in `@import` is not standards-compliant future-proof code, while `postcss-import` is.

### Create React App

Paths are relative to the file that is importing. Customizing `create-react-app`, to support absolute paths, is out of scope.
