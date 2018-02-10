---
title: Pre-Loaded Plugins
---

> Loading plugins before parsing begins in Less.js

While the easiest way to use a plugin is using the [`@plugin` at-rule](../features/#plugin-atrules-feature), in a Node.js environment, you can pre-load a global Less.js plugin via the command line or by specifying it in the [Less options](#less-options).

### Preprocessing

Pre-loading plugins is necessary if you want to add a Less.js Pre-processor. That is, a plugin that gets called and passed the raw Less source before parsing even starts. An example of this would be a [Sass-To-Less Pre-processor plugin](../tools/#plugins).

Note: pre-loading is not necessary for _pre-evaluation_ plugins (after Less source is parsed, but before it is evaluated).

## Node.js

### Using the Command Line

If you are using lessc, the first thing you need to do is install that plugin. In registries like NPM, we recommend a Less.js plugin is registered with the "less-plugin-" prefix (for easier searching), though that isn't required. So, for a custom plugin, you might install with:
```
npm install less-plugin-myplugin
```
To use the plugin, you can pass this on the command line by simply writing:
```
lessc --myplugin
```
Less.js will try to load either the "less-plugin-myplugin" and the "myplugin" modules as plugins whenever there's an unknown Less option (like "myplugin").

You can also explicitly specify the plugin with:
```
lessc --plugin=myplugin
```

To pass options to the plugin, you can write that in one of two ways.
```
lessc --myplugin="advanced"
lessc --plugin=myplugin=advanced
```

Loading a Plugin via Less.js
----------------------

In Node, require the plugin and pass it to `less` in an array as an option plugins. E.g.

```js
var LessPlugin = require('less-plugin-myplugin');
less.render(myCSS, { plugins: [LessPlugin] })
  .then(
    function(output) { },
    function(error) { }
  );
```

