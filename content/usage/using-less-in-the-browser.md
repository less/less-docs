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
Enables run-time modification of Less variables. When called with new values, the Less file is recompiled without reloading. Simple basic usage:

```js
less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
});
```

### Debugging
It is possible to output rules in your CSS which allow tools to locate the source of the rule.

Either specify the option `dumpLineNumbers` as above or add `!dumpLineNumbers:mediaquery` to the url.

You can use the "comments" option with [FireLESS](https://addons.mozilla.org/en-us/firefox/addon/fireless/) and the "mediaquery" option with FireBug/Chrome dev tools (it is identical to the SCSS media query debugging format).

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
    globalVars: {
      var1: '"string value"',
      var2: 'regular value'
    },
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
```

## Client side options

### async
Type: `Boolean`

Default: `false`

Whether to request the import files with the async option or not. See fileAsync.

### dumpLineNumbers
Type: `String`
Options: `''`| `'comments'`|`'mediaquery'`|`'all'`
Default: `''`

When set this outputs source line information directly into the output css file. This helps you debug where a particular rule came from.

The comments option is used for outputting user understandable content, whilst mediaquery is for use with a firefox extension which parses the css and extracts out the information.

In the future we hope this option to be superseded by sourcemaps.

### env
Type: `String`
Default: depends on page URL

Environment to run may be either `development` or `production`.

In production, your css is cached in local storage and information messages are not output to the console.

If the document's URL starts with `file://` or is on local machine or has a non standard port, it will automatically be set to `development`.

e.g.
```js
less = { env: 'production' };
```

### errorReporting
Type: `String`

Options: `html`|`console`|`function`

Default: `html`

Set the method of error reporting when compilation fails.

### fileAsync
Type: `Boolean`

Default: `false`

Whether to request the import asyncronously when in a page under a file protocol.

### functions
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

### logLevel
Type: `Number`

Default: 2

The amount of logging in the javascript console. Note: If you are in the environment 'production' you will get no logging.

```bash
2 - Information and errors
1 - Errors
0 - Nothing
```

### poll
Type: `Integer`

Default: `1000`

The amount of time (in milliseconds) between polls while in watch mode.

### relativeUrls
Type: `Boolean`

Default: `false`

Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.

### globalVars
Type: `Object`

Default: `undefined`

Programmatic version of [Global Variable](#command-line-usage-global-variable).

List of global variables to be injected into the code. Keys of the object are variables names, values are variables values. Variables of "string" type must explicitly include quotes if needed.

E.g.

```js
less.globalVars = { myvar: "#ddffee", mystr: "\"quoted\"" };
```

### modifyVars
Type: `Object`

Default: `undefined`

Programmatic version of [Modify Variable](#command-line-usage-modify-variable).

Same format as [globalVars](#using-less-in-the-browser-globalvars).

### rootpath
Type: `String`

Default: `false`

A path to add on to the start of every URL resource.
