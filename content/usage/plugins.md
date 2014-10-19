---
title: Plugins
---

How do I use a plugin ? - command line
--------------------------------------

If you are using lessc, the first thing you need to do is install that plugin. We reccommend the plugin starts "less-plugin" though that isn't required. For the clean css plugin you would install `npm install less-plugin-clean-css`.

To use the plugin, if you specify a unrecognised option, we attempt to load that, for example
```
lessc --clean-css="advanced"
```

Will use the plugin you just installed. You can also be more direct, for example

```
lessc --plugin=path_to_plugin=options
```

Using a plugin in code
----------------------

In Node, require the plugin and pass it to less in an array as an option plugins. E.g.

```
var myPlugin = require("my-plugin");
less.render(myCSS, { plugins: [myPlugin] })
   .then(function(css) {
    },
    function(error) {
    });
```

In the browser
-------------------

Plugin authors should provide a javascript file, just include that in the page *before* the less.js script.

List of less plugins
--------------------

 - [Clean CSS plugin to compress less](https://github.com/less/less-plugin-clean-css)
 - [Autoprefixer plugin to add backwards compatibility to your css](https://github.com/less/less-plugin-autoprefix)
 - [Inline urls - converts `url()` to a call to `data-uri()`](https://github.com/less/less-plugin-inline-urls)
 - [Npm Import - import from a sub npm repository](https://github.com/less/less-plugin-npm-import)


For plugin authors
--------------------------

Less supports some entry points that allow an author to integrate with less. We may add some more in the future.

The plugin itself has a very simple signtaure, like this
```
{
    install: function(less, pluginManager) {
    },
    minVersion: [2, 0, 0] /* optional */
}
```
So, the plugin gets the less object, which in v2 has more classes on it (making it easy to extend), a plugin manager which provides some hooks to add visitors, file managers and post processors.

If your plugin supports lessc, there are a few more details and the signature looks like this

```
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
The additions are the setOptions function which passes the string the user enters when specifying your plugin and also the printUsage function which you should use to explain your options and how the plugin works.

Here are some example repos showing the different plugin types
post-processor: https://github.com/less/less-plugin-clean-css
visitor: https://github.com/less/less-plugin-inline-urls
file-manager: https://github.com/less/less-plugin-npm-import

Note: Plugins are different from creating a version of less for a different environment but they do have similarities, for example node provides 2 file managers by default and browser provides one and that is the main step in getting less to run within a specific environment. The plugin allows you to add file managers.
