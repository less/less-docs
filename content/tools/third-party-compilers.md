---
title: Third Party Compilers
---

## Node.js Tools

* **[grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)**
* **[gulp-less](https://github.com/plus3network/gulp-less)**: Please note that this plugin discards `source-map` options, opting to instead using the [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) library.
* **[svelte-preprocess](https://github.com/sveltejs/svelte-preprocess/blob/main/docs/preprocessing.md#less)**: (converts Less to CSS before passing it to the Svelte compiler)
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
