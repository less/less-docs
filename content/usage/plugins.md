---
title: Pre-Loaded Plugins
---

> Loading plugins before parsing begins in Less.js

While the easiest way to use a plugin is using the [`@plugin` at-rule](/features/#plugins-feature), you can pre-load a global Less.js plugin via the command line or by specifying it in the [Less options](TODO: unified options section).

## Node.js

### Using the Command Line

If you are using lessc, the first thing you need to do is install that plugin. In registries like NPM, we recommend a Less.js plugin is registered with the "less-plugin-" prefix (for easier searching), though that isn't required. So, for the clean-css plugin you would install with:
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

Loading a Plugin via Less.js
----------------------

In Node, pass it to less in an array as an option plugins. E.g.

TODO: Just passing the string name of the plugin doesn't actually work yet in 3.0 alpha.

```js
less.render(myCSS, { plugins: ["less-plugin-clean-css"] })
  .then(
    function(output) { },
    function(error) { }
  );
```

Pre-Loading a Plugin In the Browser
-------------------

To pre-load a plugin in the browser, just include that in your Less options.

TODO: This doesn't actually work yet in 3.0 alpha.

```html
<script>
less = { 
    plugins: ['./plugin']
};
</script>  
<script src="less.min.js"></script>
```
<!-- Should this just be
<script src="less.min.js" data-less="{ plugins: ['./plugin'] }"></script>
More modern? -->

