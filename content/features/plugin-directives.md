> Import JavaScript plugins to add Less.js functions and features

TODO

Released [v2.5.0]({{ less.master.url }}CHANGELOG.md)


For Plugin Authors
--------------------------

Less supports some entry points that allow an author to integrate with less. We may add some more in the future.

The plugin itself has a very simple signature, like this
```js
{
    install: function(less, pluginManager) {
    },
    minVersion: [2, 0, 0] /* optional */
}
```
So, the plugin gets the less object, which in v2 has more classes on it (making it easy to extend), a plugin manager which provides some hooks to add visitors, file managers and post processors.

If your plugin supports `lessc`, there are a few more details and the signature looks like this

```js
{
    install: function(less, pluginManager) {
    },
    setOptions: function(argumentString) { /* optional */
    },
    printUsage: function() { /* optional */
    },
    minVersion: [2, 0, 0] /* optional */
}
```
The additions are the `setOptions` function which passes the string the user enters when specifying your plugin and also the `printUsage` function which you should use to explain your options and how the plugin works.

Here are some example repos showing the different plugin types:
 - post-processor: https://github.com/less/less-plugin-clean-css
 - visitor: https://github.com/less/less-plugin-inline-urls
 - file-manager: https://github.com/less/less-plugin-npm-import

Note: Plugins are different from creating a version of less for a different environment but they do have similarities, for example node provides 2 file managers by default and browser provides one and that is the main step in getting less to run within a specific environment. The plugin allows you to add file managers.


## List of Less Plugins

> Available Less plugins. Find more at the [NPM Registry](https://www.npmjs.com/search?q=%22less-plugin%22)

#### Function Libraries
| | |
|---|---|
| [advanced-color-functions](https://github.com/less/less-plugin-advanced-color-functions/) | Some advanced colour functions that helps in finding more contrasting 
| [cubehelix](https://github.com/bassjobsen/less-plugin-cubehelix) | `cubehelix(y,a,b,t)` function returns a color between the two colors a and b, using a gamma correction value of 1
| [lists](https://github.com/seven-phases-max/less-plugin-lists) | Lists/arrays manipulation functions library

#### Postprocessor/Feature Plugins
| | |
|---|---|
| [Autoprefixer](https://github.com/less/less-plugin-autoprefix) | Add vendor prefixes
| [CSScomb](https://github.com/bassjobsen/less-plugin-csscomb/) | Beautify/format
| [clean-css](https://github.com/less/less-plugin-clean-css) | Compress/minify
| [CSSWring](https://github.com/bassjobsen/less-plugin-csswring) | Compress/minify
| [css-flip](https://github.com/bassjobsen/less-plugin-css-flip) | Generate left-to-right (LTR) or right-to-left (RTL) CSS
| [functions](https://github.com/seven-phases-max/less-plugin-functions) | Write custom Less functions in Less itself
| [glob](https://github.com/just-boris/less-plugin-glob) | Globbing support in Less imports
| [group-css-media-queries](https://github.com/bassjobsen/less-plugin-group-css-media-queries) | Group CSS media queries
| [inline-urls](https://github.com/less/less-plugin-inline-urls) | Convert `url()` to a call to `data-uri()`
| [lesshint](https://github.com/lesshint/lesshint) | Lint your Less
| [npm-import](https://github.com/less/less-plugin-npm-import) | Import from npm packages
| [pleeease](https://github.com/bassjobsen/less-plugin-pleeease) | Postprocess using pleeease
| [rtl](https://github.com/less/less-plugin-rtl) | Reverse from ltr to rtl
