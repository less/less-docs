---
title: Server-side Usage
---

> Less can be used on the command line via npm, downloaded as a script file for the browser or used in a wide variety of third party tools.

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

To see all the command line options run `lessc` without parameters or see [Usage](TODO).

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
      compress: true          // Minify CSS output
    },
    function (e, output) {
       console.log(output.css);
    });
```

See [Usage](#less-options) for more information.

## Third Party Tools

See the [Tools](../tools/) section for details of other tools.

