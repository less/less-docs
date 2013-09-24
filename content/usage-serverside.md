# Server-side usage

## Installation

The easiest way to install LESS on the server, is via [npm](http://github.com/isaacs/npm), the node package manager, as so:

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
the [YUI CSS Compressor](http://developer.yahoo.com/yui/compressor/css.html) is also available with
the `--yui-compress` option.

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


## Third Party Tools

There are a selection of tools available to run in your particular environment and these are documented in the Github wiki.

* [Command Line Tools](https://github.com/cloudhead/less.js/wiki/Command-Line-use-of-LESS)
* [GUI Tools](https://github.com/cloudhead/less.js/wiki/GUI-compilers-that-use-LESS.js)
