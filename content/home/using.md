Less can be used on the command line via npm, downloaded as a script file for the browser or used in a wide variety of third party tools. See the [Usage](usage.html) section for more detailed information.

# Server-side usage

## Installation

The easiest way to install LESS on the server, is via npm, the [node.js](http://nodejs.org/) package manager, as so:

```bash
$ npm install -g less
```

## Command-line usage

Once installed, you can invoke the compiler from the command-line, as such:

```bash
$ lessc styles.less
```

This will output the compiled CSS to `stdout`, you may then redirect it to a file of your choice:

```bash
$ lessc styles.less > styles.css
```

To output minified CSS, simply pass the `-x` option. If you would like more involved minification,
the [Clean CSS](https://github.com/GoalSmashers/clean-css) is also available with
the `--clean-css` option.

To see all the command line options run lessc without parameters.

## Usage in Code

You can invoke the compiler from node, as such:

```js
var less = require('less');

less.render('.class { width: (1 + 1) }', function (e, css) {
  console.log(css);
});
```

which will output

```css
.class {
  width: 2;
}
```

you may also manually invoke the parser and compiler:

```js
var parser = new(less.Parser);

parser.parse('.class { width: (1 + 1) }', function (err, tree) {
  if (err) {
    return console.error(err)
  }
  console.log(tree.toCSS());
});
```

## Configuration

You may pass some options to the compiler:

```js
var parser = new(less.Parser)({
  paths: ['.', './lib'], // Specify search paths for @import directives
  filename: 'style.less' // Specify a filename, for better error messages
});

parser.parse('.class { width: (1 + 1) }', function (e, tree) {
  tree.toCSS({
    // Minify CSS output
    compress: true
  });
});
```

## Grunt

Less also integrates with the popular build framework grunt, using the [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less) plugin.

## Third party tools

See the [Usage](usage.html) section for details of other tools.

# Client-side usage

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

### Tips

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