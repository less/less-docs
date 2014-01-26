---
title: Using Less in the Browser
---

### Watch mode
To enable Watch mode, option `env` must be set to `development`. Then AFTER the less.js file is included, call `less.watch()`, like this:

```html
<script src="less.js"></script>
<script>less.watch();</script>
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

## Client-side Usage

Set options in a global `less` object **before** loading the less.js script:

``` html
<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    logLevel: 2,
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
```

### Client side options

#### async
Type: `Boolean`

Default: `false`

Whether to request the import files with the async option or not. See fileAsync.

#### dumpLineNumbers
Type: `String`
Options: ``|`comments`|`mediaQuery`|`all`
Default: ``

When set this outputs source line information directly into the output css file. This helps you debug where a particular rule came from.

The comments option is used for outputting user understandable content, whilst mediaQuery is for use with a firefox extension which parses the css and extracts out the information.

In the future we hope this option to be superseded by sourcemaps.

#### env
Type: `String`
Default: depends on page URL

Environment to run may be either `development` or `production`. 

In production, your css is cached in local storage and information messages are not output to the console.

If the document's URL starts with `file://` or is on local machine or has a non standard port, it will automatically be set to `development`.

e.g.
```js
less = { env: 'production' };
```

#### errorReporting
Type: `String`

Options: `html`|`console`|`function`

Default: `html`

Set the method of error reporting when compilation fails.

#### fileAsync
Type: `Boolean`

Default: `false`

Whether to request the import asyncronously when in a page under a file protocol.

#### functions
Type: `object`

User functions, keyed by name.

e.g.
```js
less = { functions: { myfunc: function() { return 1; }} };
```

and it can be used like a native Less function e.g.

```less
.my-class {
  border-width: unit(myfunc(), px);
}
```

#### logLevel
Type: `Number`

Default: 2

The amount of logging in the javascript console. Note: If you are in the environment 'production' you will get no logging.

```bash
2 - Information and errors
1 - Errors
0 - Nothing
```

#### poll
Type: `Integer`

Default: `1000`

The amount of time (in milliseconds) between polls while in watch mode.

#### relativeUrls
Type: `Boolean`

Default: `false`

Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.

#### rootpath
Type: `String`

Default: `false`

A path to add on to the start of every URL resource.