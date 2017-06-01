---
title: Plugins
---

>How do I use a plugin? 

Command Line
--------------------------------------

If you are using lessc, the first thing you need to do is install that plugin. We recommend the plugin starts with "less-plugin" though that isn't required. For the clean-css plugin you would install with
```
npm install less-plugin-clean-css
```

To use the plugin, if you specify a unrecognised option, we attempt to load that, for example
```
lessc --clean-css="advanced"
```

Will use the plugin you just installed. You can also be more direct, for example

```
lessc --plugin=path_to_plugin=options
```

Using a Plugin in Code
----------------------

In Node, require the plugin and pass it to `less` in an array as an option plugins. E.g.

```js
var myPlugin = require("my-plugin");
less.render(myCSS, { plugins: [myPlugin] })
   .then(function(output) {
    },
    function(error) {
    });
```

In the Browser
-------------------

Plugin authors should provide a javascript file, just include that in the page *before* the less.js script.

```html
<script src="plugin.js"></script>
<script>
less = { 
    plugins: [plugin]
};
</script>  
<script src="less.min.js"></script>
```

List of Less Plugins
--------------------

> Available Less plugins. Find more at [GitHib](https://github.com/search?q=topic%3Aless-plugin&type=Repositories) and [NPM Registry](https://www.npmjs.com/search?q=%22less-plugin%22) 

#### Postprocessor/Feature Plugins
| | |
|---|---|
| [Autoprefixer](https://github.com/less/less-plugin-autoprefix) | Add vendor prefixes
| [CSScomb](https://github.com/bassjobsen/less-plugin-csscomb/) | Beautify/format
| [clean-css](https://github.com/less/less-plugin-clean-css) | Compress/minify
| [CSSWring](https://github.com/bassjobsen/less-plugin-csswring) | Compress/minify
| [css-flip](https://github.com/bassjobsen/less-plugin-css-flip) | Generate left-to-right (LTR) or right-to-left (RTL) CSS
| [functions](https://github.com/seven-phases-max/less-plugin-functions) | Write custom Less functions in Less itself
| [group-css-media-queries](https://github.com/bassjobsen/less-plugin-group-css-media-queries) | Group CSS media queries
| [inline-urls](https://github.com/less/less-plugin-inline-urls) | Convert `url()` to a call to `data-uri()`
| [lesshint](https://github.com/lesshint/lesshint) | Lint your Less
| [lists](https://github.com/seven-phases-max/less-plugin-lists) | Lists/arrays manipulation (incl. loops)
| [pleeease](https://github.com/bassjobsen/less-plugin-pleeease) | Postprocess using pleeease
| [rtl](https://github.com/less/less-plugin-rtl) | Reverse from ltr to rtl
| [variables-output](https://github.com/Craga89/less-plugin-variables-output) | Export top-level variables to a JSON file

#### Preprocessors
| | |
|---|---|
| [sass2less](https://github.com/mediafreakch/less-plugin-sass2less) | Import and convert Sass/SCSS files into your Less code (incl. variables, mixins and more)

#### Import Plugins
| | |
|---|---|
| [bower-resolve](https://github.com/Mercateo/less-plugin-bower-resolve) | Import from a Bower package
| [glob](https://github.com/just-boris/less-plugin-glob) | Globbing support in Less imports
| [npm-import](https://github.com/less/less-plugin-npm-import) | Import from npm packages
| [resolve-blocks](https://github.com/Dalee/less-plugin-resolve-blocks) | Going up a tree to find specified component

#### Function Libraries
| | |
|---|---|
| [advanced-color-functions](https://github.com/less/less-plugin-advanced-color-functions/) | Functions to find more contrast colors
| [cubehelix](https://github.com/bassjobsen/less-plugin-cubehelix) | A `cubehelix` function
| [lists](https://github.com/seven-phases-max/less-plugin-lists) | Lists/arrays manipulation functions
| [urlencode](https://github.com/calvinjuarez/less-plugin-urlencode) | URL Encode function
| [util](https://github.com/FaberVitale/less-plugin-util) | A set of utility functions

#### Framework Importers
| | |
|---|---|
| [Bootstrap](https://github.com/bassjobsen/less-plugin-bootstrap/) | Bootstrap
| [Cardinal](https://github.com/bassjobsen/less-plugin-cardinal) | Cardinal
| [Flexbox Grid](https://github.com/bassjobsen/less-plugin-flexboxgrid)  | [Flexbox Grid](http://flexboxgrid.com/)
| [Flexible Grid System](https://github.com/bassjobsen/less-plugin-flexiblegs) | [Flexible Grid System](http://flexible.gs/)
| [Ionic](https://github.com/bassjobsen/less-plugin-ionic) | Ionic
| [Lesshat](https://github.com/bassjobsen/less-plugin-lesshat/) | Lesshat
| [Skeleton](https://github.com/bassjobsen/less-plugin-skeleton) | Skeleton

For Plugin Authors
--------------------------

Less supports some entry points that allow an author to integrate with it. We may add some more in the future.

The plugin itself has a very simple signature, like this
```js
{
    install: function(less, pluginManager) {
    },
    minVersion: [2, 0, 0] /* optional */
}
```
So, the plugin gets the `less` object, which in v2 has more classes on it (making it easy to extend), a plugin manager which provides some hooks to add visitors, file managers and post processors.

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
