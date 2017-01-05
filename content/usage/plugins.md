---
title: Global Plugins
---

> Installing plugins before parsing begins in Less.js

While the easiest way to use a plugin is using the [`@plugin` directive](/features/#plugin-directives), you can install a global Less.js plugin via the command line or by specifying it in the [Less options](TODO: unified options section).

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

In Node, require the plugin and pass it to less in an array as an option plugins. E.g.

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

<!-- TODO: 
  * titles of the wrapped-up libraries/frameworks should be links 
    e.g. Bootstrap -> [Bootstrap](http://getbootstrap.com) etc.
  * invent something to use instead of `import Bla-bla`, `import Blee-bloo`
-->

## List of Less Plugins (TODO - remove or move to `@plugin`?)

#### Framework/Library Importers

<!-- currently false, but rewriting the file importer for less-node -->
_Note: many of these are no longer necessary since Less.js can import NPM-installed libraries since v3.0._

| | |
|---|---|
| [Bootstrap](https://github.com/bassjobsen/less-plugin-bootstrap/) | import Bootstrap
| [Bower Resolve](https://github.com/Mercateo/less-plugin-bower-resolve) | import from a Bower package
| [Cardinal CSS for less.js](https://github.com/bassjobsen/less-plugin-cardinal) | import Cardinal
| [Flexbox Grid](https://github.com/bassjobsen/less-plugin-flexboxgrid)  | import [Flexbox Grid](http://flexboxgrid.com/)
| [Flexible Grid System](https://github.com/bassjobsen/less-plugin-flexiblegs) | import [Flexible Grid System](http://flexible.gs/)
| [Ionic](https://github.com/bassjobsen/less-plugin-ionic) | import Ionic
| [Lesshat](https://github.com/bassjobsen/less-plugin-lesshat/) | import Lesshat
| [Skeleton](https://github.com/bassjobsen/less-plugin-skeleton) | import Skeleton

