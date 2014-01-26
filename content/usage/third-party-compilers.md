---
title: Third-party compilers
---

## Node.js compilers

* **[assemble-less](https://github.com/assemble/assemble-less)**: Full-featured Grunt.js plugin for compiling LESS files to CSS, with additional options for maintaining libraries of LESS components and themes. For advanced users, this plugin allows you to define and manage LESS "packages" or "bundles" using JSON, [Lo-dash](https://github.com/bestiejs/lodash)(underscore) templates (e.g. `<%= bootstrap.less %>`), and [node-glob](https://github.com/isaacs/node-glob) / [minimatch](https://github.com/isaacs/minimatch) (e.g. `'../src/**/*.less"`). _assemble-less_ also has a number of options including minifying CSS
* **[RECESS](https://github.com/twitter/recess)**: Twitter's code quality tool for CSS built on top of LESS. RECESS has options for compiling LESS to CSS, as well as linting, formatting and minifying CSS.
* **[autoless](https://github.com/jgonera/autoless)**: A LESS files watcher, with dependency tracking (changes to imported files cause other files to be updated too) and growl notifications.
* **[Connect Middleware for LESS.js](https://github.com/emberfeather/less.js-middleware)**: Connect Middleware for LESS.js compiling


## Other technologies

**Wro4j Runner CLI**
Download the [wro4j-runner.jar](http://wro4j.googlecode.com/files/wro4j-runner-1.4.1-jar-with-dependencies.jar) file and run the following command:

```
java -jar wro4j-runner-1.5.0-jar-with-dependencies.jar --preProcessors lessCss`
```

More details can be found here: [Wro4j Runner CLI](http://code.google.com/p/wro4j/wiki/wro4jRunner)

**CSS::LESSp**

http://search.cpan.org/~drinchev/CSS-LESSp/

```bash
lessp.pl styles.less > styles.css
```

**Windows Script Host**

Note - the official less node runs on windows, so we ar enot sure why you would use this.

[LESS.js for Windows](https://github.com/duncansmart/less.js-windows) with this usage:

```bash
cscript //nologo lessc.wsf input.less [output.css] [-compress]
```
or

```bash
lessc input.less [output.css] [-compress]
```

**dotless**

[dotless for Windows](http://www.dotlesscss.org/) can be run like this:

```bash
dotless.Compiler.exe [-switches] <inputfile> [outputfile]
```
