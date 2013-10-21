> There are many options for compiling LESS to CSS, using the command line or GUI tools

### Command Line

To compile LESS to CSS using the command line, start by installing Less.js with the [Node Package Manager](http://nodejs.org/download/):

``` bash
npm install -g less
```
And then:
``` bash
lessc styles.less styles.css
```

### node.js tools
There are a number of 3rd-party tools available for compiling LESS to CSS, including:
* **[assemble-less](https://github.com/assemble/assemble-less)**: Full-featured, configurable Grunt.js plugin for compiling LESS and LESS "bundles" to CSS.
* **[RECESS](https://github.com/twitter/recess)**: Twitter's code quality tool for CSS built on top of LESS. 
* **[autoless](https://github.com/jgonera/autoless)**: A LESS files watcher, with dependency tracking and growl notifications.

**[[More information|Converting-LESS-to-CSS]]** about node.js compilers.

### GUI tools
TODO: add a summary of GUI tools


### Related Information

* [[Command Line Usage]]
* [[Converting LESS to CSS]]