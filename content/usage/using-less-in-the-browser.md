---
title: Browser Usage
---

> Using Less.js in the browser is the easiest way to get started and convenient for developing with Less, but in production, when performance and reliability is important, we recommend pre-compiling using Node.js or one of the many third party tools available.

To start off, link your `.less` stylesheets with the `rel` attribute set to "`stylesheet/less`":

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

Next, [download less.js](https://github.com/less/less.js/archive/master.zip) and include it in a `<script></script>` tag in the `<head>` element of your page:

```html
<script src="less.js" type="text/javascript"></script>
```

### Setting Options

You can set options either programmatically, by setting them on a less object **before** the script tag - this then affects all initial link tags and programmatic usage of less.

```html
<script>
  less = {
    env: "development",
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

The other way is to specify the options on the script tag, e.g.

```html
<script>
  less = {
    env: "development"
  };
</script>
<script src="less.js" data-env="development"></script>
```

Or for brevity they can be set as attributes on the script and link tags:

```html
<script src="less.js" data-poll="1000" data-relative-urls="false"></script>
<link data-dump-line-numbers="all" data-global-vars='{ "myvar": "#ddffee", "mystr": "\"quoted\"" }' rel="stylesheet/less" type="text/css" href="less/styles.less">
```
<!-- 
  Which attributes go on which tag?? And aren't they in the wrong order?
  Should this just be <script src="less.js" data-less="{ [options] }" /> ? 
  Seems like that would be way easier.

  Declaring globals like "less = { }" is seen as bad practice in modern web development.
  Wonder if it's time to re-think this soon.
-->


### Browser Support

Less.js supports all modern browsers (recent versions of Chrome, Firefox, Safari, IE11+, and Edge). While it is possible to use Less on the client side in production, please be aware that there are performance implications for doing so (although the latest releases of Less are quite a bit faster). Also, sometimes cosmetic issues can occur if a JavaScript error occurs. This is a trade off of flexibility vs. speed. For the fastest performance possible for a static web site, we recommend compiling Less on the server side.

There are reasons to use client-side less in production, such as if you want to allow users to tweak variables which will affect the theme and you want to show it to them in real-time - in this instance a user is not worried about waiting for a style to update before seeing it.


### Tips

* Make sure you include your stylesheets **before** the script.
* When you link more than one `.less` stylesheet each of them is compiled independently. So any variables, mixins or namespaces you define in a stylesheet are not accessible in any other.
* Due to the same origin policy of browsers, loading external resources requires [enabling CORS](http://enable-cors.org/)

<!-- 
The important points for attribute options are..

 - importance level: window.less < script tag < link tag
 - data attributes names are not camelCase (e.g logLevel -> data-log-level)
 - link tag options are just render time options (e.g verbose, logLevel ... are not supported)
 - non-string data attributes values should be JSON valid (e.g use double quotes instead of single quotes like in `data-global-vars='{ "myvar": "#ddffee", "mystr": "\"quoted\"" }'`) -->

### Watch Mode
To enable Watch mode, option `env` must be set to `development`. Then AFTER the less.js file is included, call `less.watch()`, like this:

```html
<script>less = { env: 'development'};</script>
<script src="less.js"></script>
<script>less.watch();</script>
```

Alternatively, you can enable Watch mode temporarily by appending `#!watch` to the URL.

### Modify Variables
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

You can use the `mediaquery` option with [FireLESS](https://addons.mozilla.org/en-us/firefox/addon/fireless/) (it is identical to the SCSS media query debugging format). Also see [FireLess and Less v2](http://bassjobsen.weblogs.fm/fireless-less-v2/). The `comment` option can be used to display file information and line numbers in the inline compiled CSS code.

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
      var1: '"quoted value"',
      var2: 'regular value'
    },
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
```

## Options specific to Less.js in the browser

_For all other options, see [Less Options](#less-options)._

#### async
Type: `Boolean`

Default: `false`

Whether to request the import files with the async option or not. See [fileAsync](#using-less-in-the-browser-fileasync).


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

#### functions (Deprecated - use @plugin)
Type: `object`

User functions, keyed by name.

```js
less = {
    functions: {
        myfunc: function() {
            return less.Dimension(1);
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

#### relativeUrls
Type: `Boolean`

Default: `false`

Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.


#### useFileCache
Type: `Boolean`

Default: `true` (previously `false` in before v2)

Whether to use the per session file cache. This caches less files so that you can call modifyVars and it will not retrieve all the less files again.
If you use the watcher or call refresh with reload set to true, then the cache will be cleared before running.


