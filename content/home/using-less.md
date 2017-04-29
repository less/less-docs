---
title: Server-side Usage
---

> Less can be used on the command line via npm, downloaded as a script file for the browser or used in a wide variety of third party tools. See the [Usage]({{resolve 'usage'}}) section for more
detailed information.

## Installation

The easiest way to install Less on the server, is via npm, the [node.js](http://nodejs.org/) package manager, as so:

```bash
$ npm install -g less
```

## Command-line Usage

Once installed, you can invoke the compiler from the command-line, as such:

```bash
$ lessc styles.less
```

This will output the compiled CSS to `stdout`. To save the CSS result to a file of your choice use:

```bash
$ lessc styles.less styles.css
```

To output minified CSS you can use the [`clean-css` plugin](https://github.com/less/less-plugin-clean-css). When the plugin is installed, a minified CSS output is specified with `--clean-css` option: 

```bash
$ lessc --clean-css styles.less styles.min.css
```

To see all the command line options run `lessc` without parameters or see [Usage]({{resolve 'usage'}}).

## Usage in Code

You can invoke the compiler from node, as such:

```js
var less = require('less');

less.render('.class { width: (1 + 1) }', function (e, output) {
  console.log(output.css);
});
```

which will output

```css
.class {
  width: 2;
}
```

## Configuration

You may pass some options to the compiler:

```js
var less = require('less');

less.render('.class { width: (1 + 1) }',
    {
      paths: ['.', './lib'],  // Specify search paths for @import directives
      filename: 'style.less', // Specify a filename, for better error messages
    },
    function (e, output) {
       console.log(output.css);
    });
```

See [Usage]({{resolve 'usage'}}) for more information.

## Third Party Tools

See the [Usage]({{resolve 'usage'}}) section for details of other tools.

<!-- # Command-line with Rhino
> Each less.js release contains also rhino-compatible version.

Command line rhino version requires two files:
* less-rhino-&lt;version&gt;.js - compiler implementation,
* lessc-rhino-&lt;version&gt;.js - command line support.

Command to run the compiler:
````
java -jar js.jar -f less-rhino-<version>.js lessc-rhino-<version>.js styles.less styles.css
````

This will compile styles.less file and save the result to styles.css file. The output file parameter is optional. If it is missing, less will output the result to `stdout`.-->

# Client-side Usage

> Using less.js in the browser is great for development, but it's not recommended for production

Client-side is the easiest way to get started and good for developing with Less, but in production, when performance and reliability is important, _we recommend pre-compiling using node.js or one of the many third party tools available_.

To start off, link your `.less` stylesheets with the `rel` attribute set to "`stylesheet/less`":

```html
<link rel="stylesheet/less" type="text/css" href="styles.less" />
```

Next, [download less.js](https://github.com/less/less.js/archive/master.zip) and include it in a `<script></script>` tag in the `<head>` element of your page:

```html
<script src="less.js" type="text/javascript"></script>
```

### Tips

* Make sure you include your stylesheets **before** the script.
* When you link more than one `.less` stylesheet each of them is compiled independently. So any variables, mixins or namespaces you define in a stylesheet are not accessible in any other.
* Due to the same origin policy of browsers loading external resources requires [enabling CORS](http://enable-cors.org/)

## Browser Options

Options are defined by setting them on a global `less` object **before** the `<script src="less.js"></script>`:

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

Or for brevity they can be set as attributes on the script and link tags (requires JSON.parse browser support or polyfill).

``` html
<script src="less.js" data-poll="1000" data-relative-urls="false"></script>
<link data-dump-line-numbers="all" data-global-vars='{ myvar: "#ddffee", mystr: "\"quoted\"" }' rel="stylesheet/less" type="text/css" href="less/styles.less">
```

Learn more about [Browser Options](usage/#using-less-in-the-browser-setting-options)
