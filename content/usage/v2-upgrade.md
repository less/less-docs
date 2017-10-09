---
title: V2 Upgrade Guide
---

Language Changes
----------------

Colours now output as they are written, so `purple` stays as `purple` and is not converted to its hex representation.

Command Line Usage
------------------

### Clean CSS

We have removed the dependency on `clean-css` and moved it to a [plugin](https://github.com/less/less-plugin-clean-css).
This allows us to:

1. update the dependency and integration without a Less release
2. not tie people who do not use `clean-css` into having it downloaded by npm.

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

Further, instead of returning a string which is the css, we return an object with a `css` field set to the string and a `map` field set to the sourcemap (if applicable).

The sourcemap options are now to be set on sourceMap instead of directly on options. So instead of `options.sourceMapFullFilename = ` you would set `options.sourceMap = { sourceMapFullFilename: `.

Browser Usage
-------------

The browser usage has not changed significantly. Options set on the `less` object are exposed as `less.options` after the less script has run, rather than polluting `less`.

It is now possible to specify options on the script and Less tags, which should simplify option setting in the browser. See the browser usage section for more information.
