# Command Line Usage

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [GUI compilers for LESS](#).</span>

## lessc

> Server-Side and Command Line Usage

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OSX and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

### Options

```
-h, --help               Print help (this message) and exit.
--include-path=PATHS     Set include paths. Separated by `:'. Use `;' on Windows.
-M, --depends            Output a makefile import dependency list to stdout
--no-color               Disable colorized output.
--no-ie-compat           Disable IE compatibility checks.
--no-js                  Disable JavaScript in less files
-l, --lint               Syntax check only (lint).
-s, --silent             Suppress output of error messages.
--strict-imports         Force evaluation of imports.
--insecure               Allow imports from insecure https hosts.
-v, --version            Print version number and exit.
-x, --compress           Compress output by removing some whitespaces.
--clean-css              Compress output using clean-css
--clean-option=opt:val   Pass an option to clean css, using CLI arguments from
                         https://github.com/GoalSmashers/clean-css e.g.
                         --clean-option=--selectors-merge-mode:ie8
                         and to switch on advanced use --clean-option=--advanced
--source-map[=FILENAME]  Outputs a v3 sourcemap to the filename (or output filename.map)
--source-map-rootpath=X  adds this path onto the sourcemap filename and less file paths
--source-map-basepath=X  Sets sourcemap base path, defaults to current working directory.
--source-map-less-inline puts the less files into the map instead of referencing them
--source-map-map-inline  puts the map (and any less files) into the output css file
--source-map-url=URL     the complete url and filename put in the less file
-rp, --rootpath=URL      Set rootpath for url rewriting in relative imports and urls.
                         Works with or without the relative-urls option.
-ru, --relative-urls     re-write relative urls to the base less file.
-sm=on|off               Turn on or off strict math, where in strict mode, math
--strict-math=on|off     requires brackets. This option may default to on and then
                         be removed in the future.
-su=on|off               Allow mixed units, e.g. 1px+1em or 1px*1px which have units
--strict-units=on|off    that cannot be represented.
--global-var='VAR=VALUE' Defines a variable that can be referenced by the file.
--modify-var='VAR=VALUE' Modifies a variable already declared in the file.
```

### Examples

```bash
# compile bootstrap.less to bootstrap.css
$ lessc bootstrap.less bootstrap.css

# compile bootstrap.less to bootstrap.css and minify (compress) the result
$ lessc -x bootstrap.less bootstrap.css
```

## less.js
> Client-side Usage

Set options in a global `less` object **before** loading the less.js script:
``` html
<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    logLevel: 2,
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

### env
Type: `String`
Default: `development`

Environment to run may be either `development` or `production`. If the document's URL starts with file:// or localhost it will automatically be set to 'development'.

#### logLevel
Type: `Number`
Default: 2

The amount of logging in the javascript console.

```bash
2 - Information and errors
1 - Errors
0 - Nothing
```

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

**TODO**: need more explanation here.

### relativeUrls
Type: `Boolean`
Default: `false`

Optionally adjust URLs to be relative. When false, URLs are already relative to the entry less file.

### rootpath
Type: `String`
Default: `false`

A path to add on to the start of every URL resource.
