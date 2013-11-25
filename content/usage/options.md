# Command Line Usage

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [[GUI compilers for LESS|GUI-compilers-that-use-Less.js]].</span>

# lessc

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OSX and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

**Options**:

```
-h,  --help               Print help (this message) and exit.
-v,  --version            Print version number and exit.
     --verbose            Be verbose.
-s,  --silent             Suppress output of error messages.
     --line-numbers=TYPE  Outputs filename and line numbers. ☃ (1)
-rp, --rootpath           Set rootpath for URL rewriting in relative imports and URLs. ☃ (2)
     --include-path       Set include paths. ☃ (3)
-ru, --relative-urls      Re-write relative URLs to the base less file.
     --strict-imports     Force evaluation of imports.
 -x, --compress           Compress output by removing some whitespaces.
     --yui-compress       Compress output using ycssmin
-O0, -O1, -O2             Set the parser's optimization level.  ☃ (4)
     --no-color           Disable colorized output.
```

**☃ Comments**:

**(1)** `--line-numbers` `TYPE` can be:
  * `comments`: output the debug info within comments.
  * `mediaquery`: outputs the information within a fake media query which is compatible with the SASS format.
  * `all` does both

**(2)** `--rootpath`: sorks with or without the `relative-urls` option.

**(3)** `--include-path`: separated by `:`. Use `;` on Windows.

**(4)** Optimization levels: The lower the number, the fewer nodes created in the tree. Useful for debugging or if you need to access the individual nodes in the tree.

# Examples

``` bash
  # compile bootstrap.less to bootstrap.css
  $ lessc bootstrap.less bootstrap.css

  # compile bootstrap.less to bootstrap.css and minify (compress) the result
  $ lessc -x bootstrap.less bootstrap.css
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
