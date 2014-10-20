---
title: V2 Upgrade Guide
---

Command line usage
------------------

### Clean Css

We have removed the dependency on clean css and moved it to a [plugin](https://github.com/less/less-plugin-clean-css).
This allows us to 1. update the dependency and integration without a less release 2. Does not tie people who do not use clean css into having it downloaded by npm.

The usage is similar, just install the plugin (`npm install -g less-plugin-clean-css`) then tell less to use it by using the
`--clean-css` argument.

```bash
# old
lessc --clean-css --clean-option=--compatibility:ie8 --clean-option=--advanced
# new
lessc --clean-css="--compatibility=ie8 --advanced"
```

### Sourcemaps

We have improved the source map options and path generation so the sourcemap should be generated at the correct path without specifying any options.

Programmatic Usage
------------------

We have deprecated the use of less.Parser and toCss to generate the css. Instead we require you to use the `less.render` shorthand.
See [Programmatic Usage](#programmatic-usage) for more information.

If you already use `less.render` you should not require any changes.

Browser usage
-------------

The browser usage has not changed.
