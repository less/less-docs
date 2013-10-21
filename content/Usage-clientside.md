# Clientside Usage

> Using less.js in the browser is great for development, but it's not recommended for production

Client-side is the easiest way to get started and good for developing with LESS. But in production, when performance and reliability is important, _we recommend pre-compiling using node.js or one of the many third party tools available_.

## Getting started

Link your `.less` stylesheets with the `rel` attribute set to "`stylesheet/less`":

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

Next, [download less.js](https://github.com/less/less.js/archive/master.zip) and include it in a `<script></script>` tag in the `<head>` element of your page:

```html
<script src="less.js" type="text/javascript"></script>
```

### FAQ

* Make sure you include your stylesheets **before** the script.
* When you link more than one `.less` stylesheet each of them is compiled independently. So any variables, mixins or namespaces you define in a stylesheet are not accessible in any other.

## Browser Options

Options are defined by setting them on a global LESS object **before** the `<script src="less.js"></script>`:

``` html
<!-- set options before less.js script -->
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

### env
Type: `String`
Default: `development`

Environment to run may be either `development` or `production`. If the document's URL starts with file:// or localhost it will automatically be set to 'development'.


### async
Type: `Boolean`
Default: `false`

Load imports asynchronously.


### fileAsync
Type: `Boolean`
Default: `false`

Load imports asynchronously when in a page under a file protocol.


### poll
Type: `Integer`
Default: `1000`

The amount of time (in milliseconds) between polls while in watch mode.


### functions
Type: `object`

User functions, keyed by name.


### dumpLineNumbers
Type: `String`
Options: `comments`|`mediaQuery`|`all`
Default: `comments`

**TODO**: need more explaination here.


### relativeUrls
Type: `Boolean`
Default: `false`

Optionally adjust URL's to be relative. When false, URL's are already relative to the entry less file.


### rootpath
Type: `String`
Default: `false`

A path to add on to the start of every URL resource.


## Watch mode
To enable Watch mode, option `env` must be set to `development`. Then AFTER the less.js file is included, call less.watch(), like this:

```html
<script src="less.js"></script>
<script>less.watch()</script>
```

Alternatively you can temporary enable Watch mode by appending `#!watch` to the URL.


## Modify variables

Enables modification of LESS variables in run-time. When called with new values, the LESS file is recompiled without reloading. Simple basic usage:

```js
less.modifyVars({
  '@buttonFace': '#5B83AD',
  '@buttonText': '#D9EEF2'
});
```

## Debugging
It is possible to output rules in your CSS which allow tools to locate the source of the rule.

Either specify the option `dumpLineNumbers` as above or add `!dumpLineNumbers:mediaQuery` to the url.

You can use the "comments" option with [FireLESS](https://addons.mozilla.org/en-us/firefox/addon/fireless/) and the "mediaQuery" option with FireBug/Chrome dev tools (it is identical to the SCSS media query debugging format).


## More information
* **Usage**: for an introduction to the language, please visit [lesscss.org](http://lesscss.org).
* **Developer info**: visit the wiki homepage [wiki](https://github.com/cloudhead/less.js/wiki) ## Watch mode

*Watch mode* is a client-side feature which enables your styles to refresh automatically as they are changed.

To enable it, append '`#!watch`' to the browser URL, then refresh the page. Alternatively, you can run `less.watch()` from the console.

