---
title: Using Less in the Browser
---

We recommend using less in the browser only for development or when you need to dynamically compile less and cannot do it serverside.
This is because less is a large javascript file and compiling less before the user can see the page means a delay for the user. In addition,
consider that mobile devices will compile slower. For development consider if using a watcher and live reload (e.g. with grunt or gulp) would
be better suited.

To use less in the browser, you firstly need to include the less script.

```html
<!-- Here: include any less plugin scripts, any required browser shims and optionally set less = any options  -->
<script src="less.js"></script>
```

This will find any less style tags on the page

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

and create style tags with the compiled css synchronously.

### Setting options

You can set options either programmatically, by setting them on a less object before the script tag - this then effects all initial link tags and programmatic usage of less.

```html
<script>
  less = {
    env: "development"
  };
</script>
<script src="less.js"></script>
```

The other way is to specify the options on the script tag, e.g.

```html
<script>
  less = {
    env: "development"
  };
</script>
<script src="less.js" data-env="development"></script>
```

And you can also do this on link tags to override certain settings (some less settings like verbose are global and can not be overridden).

```html
<link data-dump-line-numbers="all" data-global-vars='{ myvar: "#ddffee", mystr: "\"quoted\"" }' rel="stylesheet/less" type="text/css" href="less/styles.less">
```

The important points for attribute options are..

 - importance level: window.less < script tag < link tag
 - data attributes names are not camelCase (e.g logLevel -> data-log-level)
 - link tag options are just render time options (e.g verbose, logLevel ... are not supported)
 - non-string data attributes values should be JSON valid (e.g use double quotes instead of single quotes like in `data-global-vars='{ myvar: "#ddffee", mystr: "\"quoted\"" }'`)

### Watch mode
To enable Watch mode, option `env` must be set to `development`. Then AFTER the less.js file is included, call `less.watch()`, like this:

```html
<script>less = { env: 'development'};</script>
<script src="less.js"></script>
<script>less.watch();</script>
```

Alternatively, you can enable Watch mode temporarily by appending `#!watch` to the URL.

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

You can use the `comments` option with [FireLESS](https://addons.mozilla.org/en-us/firefox/addon/fireless/) and the `mediaquery` option with FireBug/Chrome dev tools (it is identical to the SCSS media query debugging format).

### Options

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

#### async
Type: `Boolean`

Default: `false`

Whether to request the import files with the async option or not. See [fileAsync](#using-less-in-the-browser-fileasync).

#### dumpLineNumbers
Type: `String`
Options: `''`| `'comments'`|`'mediaquery'`|`'all'`
Default: `''`

When set, this adds source line information to the output css file. This helps you debug where a particular rule came from.

The `comments` option is used for outputting user-understandable content, whilst `mediaquery` is for use with a firefox extension which parses the css and extracts the information.

In the future we hope this option to be superseded by sourcemaps.

#### env
Type: `String`
Default: depends on page URL

Environment to run may be either `development` or `production`.

In production, your css is cached in local storage and information messages are not output to the console.

If the document's URL starts with `file://` or is on your local machine or has a non standard port, it will automatically be set to `development`.

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

Whether to request the import asynchronously when in a page with a file protocol.

#### functions
Type: `object`

User functions, keyed by name.

e.g.
```js
less = {
    functions: {
        myfunc: function() {
            return new(less.tree.Dimension)(1);
        }
    }
};
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

The amount of logging in the javascript console. Note: If you are in the `production` environment you will not get any logging.

```bash
2 - Information and errors
1 - Errors
0 - Nothing
```

#### poll
Type: `Integer`

Default: `1000`

The amount of time (in milliseconds) between polls while in watch mode.

### relativeUrls
Type: `Boolean`

Default: `false`

Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.

#### globalVars
Type: `Object`

Default: `undefined`

List of global variables to be injected into the code. Keys of the object are variables names, values are variables values. Variables of "string" type must explicitly include quotes if needed.

E.g.

```js
less.globalVars = { myvar: "#ddffee", mystr: "\"quoted\"" };
```

This option defines a variable that can be referenced by the file. Effectively the declaration is put at the top of your base Less file, meaning it can be used but it also can be overridden if this variable is defined in the file.

#### modifyVars
Type: `Object`

Default: `undefined`

Same format as [globalVars](#using-less-in-the-browser-globalvars).

As opposed to the [globalVars](#using-less-in-the-browser-globalvars) option, this puts the declaration at the end of your base file, meaning it will override anything defined in your Less file.

#### rootpath
Type: `String`

Default: `false`

A path to add on to the start of every URL resource.
