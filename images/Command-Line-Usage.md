> Compile `.less` files to `.css` using the command line

> Heads up! If the command line isn't your thing, learn more about [GUI compilers for LESS](GUI-compilers-that-use-Less.js.md).

# lessc

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OSX and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

**Options**:

``` bash
   -h, --help               Print help (this message) and exit.
   -v, --version            Print version number and exit.
       --verbose            Be verbose.
   -s, --silent             Suppress output of error messages.
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