## Using Less in the Browser
### Watch mode
To enable Watch mode, option `env` must be set to `development`. Then AFTER the less.js file is included, call less.watch(), like this:

```html
<script src="less.js"></script>
<script>less.watch()</script>
```

Alternatively you can temporary enable Watch mode by appending `#!watch` to the URL.

### Modify variables

Enables modification of LESS variables in run-time. When called with new values, the LESS file is recompiled without reloading. Simple basic usage:

```js
less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
});
```

### Debugging
It is possible to output rules in your CSS which allow tools to locate the source of the rule.

Either specify the option `dumpLineNumbers` as above or add `!dumpLineNumbers:mediaQuery` to the url.

You can use the "comments" option with [FireLESS](https://addons.mozilla.org/en-us/firefox/addon/fireless/) and the "mediaQuery" option with FireBug/Chrome dev tools (it is identical to the SCSS media query debugging format).
