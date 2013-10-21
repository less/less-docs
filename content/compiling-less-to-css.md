# Options for Compiling LESS to CSS

> This page provides a basic overview of the options for compiling LESS to CSS.

* [Command line options](#command-line)
* [GUI compilers](#gui-compilers)


<a name="command-line"></a>
## Command Line

Depending on the platform there are a number of ways to compile `.less` files to `.css` using the command line.


### Cross Platform

**lessc**

The binary included in this repository, `bin/lessc` works with Node.js on *nix, OSX and Windows.

Installation and usage:

1. Install [Node.js with the Node Package Manager](http://nodejs.org/download/) if you don't have it installed yet.
2. `npm install -g less`

And then...

```bash
lessc source [destination] [--version] [--compress] [--yui-compress] [--verbose] [--silent] [--no-color] [--include-path=path1:path2]
```

TODO: Add more detail about less command line options, and how to use them. This wiki is for designers and developers.


**Wro4j Runner CLI**

Download the [wro4j-runner.jar](http://wro4j.googlecode.com/files/wro4j-runner-1.4.1-jar-with-dependencies.jar) file and run the following command:

```java
java -jar wro4j-runner-1.5.0-jar-with-dependencies.jar --preProcessors lessCss
```

More details can be found here: [Wro4j Runner CLI](http://code.google.com/p/wro4j/wiki/wro4jRunner)


**Recess.js**

Twitter's code quality tool for CSS built on top of LESS. Visit the [Recess repo on GitHub](https://github.com/twitter/recess).


**CSS::LESSp**

http://search.cpan.org/~drinchev/CSS-LESSp/

```
lessp.pl css.less > css.css
```


### Windows

**Using Windows Script Host**

[LESS.js for Windows](https://github.com/duncansmart/less.js-windows) with this usage:

```
cscript //nologo lessc.wsf input.less [output.css] [-compress]
```

or

```
lessc input.less [output.css] [-compress]
```

**dotless**

[dotless for Windows](http://www.dotlesscss.org/) can be run like this:

```
dotless.Compiler.exe [-switches] <inputfile> [outputfile]
```


<a name="gui-compilers"></a>
## GUI Compilers

If you are interested in command line usage and tools see [Command-Line-use-of-LESS](https://github.com/cloudhead/less.js/wiki/Command-Line-use-of-LESS).

**Tip**: be sure to try out the different LESS tools available for your platform, to see which one fits you best.



### Cross platform compilers


TODO:
  * Host all images in the wiki.
  * Format all images to the same size, large and easy to see.
  * Ask the leads for all compilers to provide links to support pages.


#### Crunch!
[http://crunchapp.net/](http://crunchapp.net/)

Crunch is not just a LESS compiler, it is also a LESS editor for Windows and Mac. If you work a lot with LESS files, you should definitely try it out.
Crunch is built on the Adobe AIR platform.

![Crunch screenshot](http://crunchapp.net/img/Crunch.png)

#### SimpLESS
[http://wearekiss.com/simpless](http://wearekiss.com/simpless)

SimpLESS is a minimalistic LESS compiler. Just drag, drop and compile. One of the unique features of SimpLESS is that it supports 'prefixing' your CSS by using [http://prefixr.com.](http://prefixr.com).
SimpLESS is built on the Titanium platform.

![SimpLESS screenshot](http://wearekiss.com/lib/img/simpless/app-windows.png?1)



### Linux

#### Plessc
[https://github.com/Mte90/Plessc](https://github.com/Mte90/Plessc)

Plessc is a gui fronted made with PyQT. Support the log and the option for open the less file (or the less file present in the folder of the input file) on the editor choosen.

![Plessc screenshot](http://www.mte90.net/wp-content/uploads/2013/02/screenshot.png)



### OSx

#### LESS.app
[http://incident57.com/less](http://incident57.com/less)

LESS.app was the first GUI compiler for LESS. LESS.app has a 'Compiler' tab where you can see the compiler results.

![LESS.app screenshot](http://incident57.com/less/images/hero-window.png)



### Windows

#### WinLess
[http://winless.org](http://winless.org)

WinLess started out as a clone of LESS.app. It takes a more feature-complete approach and has several settings. It also supports starting with command line arguments.

![WinLess screenshot](http://files.web-mark.nl/winless/style/images/WinLess_Screenshot.png)