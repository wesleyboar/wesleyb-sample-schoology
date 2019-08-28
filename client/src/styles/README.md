# Schoology Autofill - Client Web App - Styles

Follow [ITCSS][itcss], [BEM with Namespaces][bem-w-ns], and [KSS][kss] comments.

> **To Do**
>
> - Add a CSS linter.
> - Support absolute paths.
> - Process `./test` directory, _but_ **not** on production.
> - Test and polish documentation.

## Browser Support

See [`/client/package.json` @ `browserslist`](../../client/package.json).

## Notes

### Paths for Importing Stylesheets

### Globbing

Nope. I can glob via `postcss-easy-import`, but glob in `@import` is not standards-compliant future-proof code, while `postcss-import` is.

### Create React App

Paths are relative to the file that is importing. Customizing `create-react-app`, to support absolute paths, is out of scope.


[itcss]: https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/ "Inverted Triangle CSS"
[bem-w-ns]: https://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/ "BEM with Namespaces"
[kss]: http://kss-node.github.io/kss-node/ "KSS Node"