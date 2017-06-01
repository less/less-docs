---
title: Third Party Compilers
---

## Node.js Compilers

* **[grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)**
* **[assemble-less](https://github.com/assemble/assemble-less)**: Full-featured Grunt.js plugin for compiling Less files to CSS, with additional options for maintaining libraries of Less components and themes. For advanced users, this plugin allows you to define and manage Less "packages" or "bundles" using JSON, [Lo-dash](https://github.com/bestiejs/lodash)(underscore) templates (e.g. `<%= bootstrap.less %>`), and [node-glob](https://github.com/isaacs/node-glob) / [minimatch](https://github.com/isaacs/minimatch) (e.g. `'../src/**/*.less"`). _assemble-less_ also has a number of options including minifying CSS
* **[gulp-less](https://github.com/plus3network/gulp-less)**: Please note that this plugin discards `source-map` options, opting to instead using the [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) library.
* **[autoless](https://github.com/jgonera/autoless)**: A Less files watcher, with dependency tracking (changes to imported files cause other files to be updated too) and growl notifications.
* **[Connect Middleware for Less](https://github.com/emberfeather/less.js-middleware)**: Connect Middleware for Less compiling


## Other Technologies

**Wro4j Runner CLI**
Download the [wro4j-runner.jar](http://wro4j.googlecode.com/files/wro4j-runner-1.4.1-jar-with-dependencies.jar) file and run the following command:

```bash
java -jar wro4j-runner-1.5.0-jar-with-dependencies.jar --preProcessors lessCss
```

More details can be found here: [Wro4j Runner CLI](http://code.google.com/p/wro4j/wiki/wro4jRunner)

**CSS::LESSp**

http://search.cpan.org/~drinchev/CSS-LESSp/

```bash
lessp.pl styles.less > styles.css
```

**Windows Script Host**

Note - the official Less node runs on windows, so we are not sure why you would use this.

[Less.js for Windows](https://github.com/duncansmart/less.js-windows) with this usage:

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

**Also see:** 

* [Ports of Less](/about/#ports)
