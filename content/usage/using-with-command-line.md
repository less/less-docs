---
title: Command Line Usage
---

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [GUI compilers for LESS](#).</span>

### Installing lessc

Install with [npm]()

```bash
npm i less --save-dev
```

This will install the latest official version of lessc in your project folder, also adding it to the `devDependencies` in your project's `package.json`.

Note that a [tilde version range][] will be automatically specified in `package.json`. This is good, as new patch releases of the latest version will be installable by npm.


#### Installing a specific version of lessc

If you need a specific version of lessc, run `npm install less@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.


#### Installing a published development version of lessc

Periodically, as new functionality is being developed, lessc builds will be published to npm. These builds will _not_ be published as a `@latest` official release, and will typically have a build number or alpha/beta/release candidate designation.

Like installing a specific version of lessc, run `npm install lessc@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that regardless of the version you specify, a [tilde version range][] will be specified in `package.json`. **This is very bad**, as new, possibly incompatible, patch releases of the specified development version may be installed by npm, breaking your build.

_In this case it is **very important** that you manually edit your `package.json` and remove the `~` (tilde) from the version number. This will lock in the exact development version that you have specified._


#### Installing an unpublished development version of lessc

If you want to install a bleeding-edge, unpublished version of lessc, follow the instructions for specifying a [git URL as a dependency][] and be sure to specify an actual commit SHA (not a branch name) as the `commit-ish`. This will guarantee that your project always uses that exact version of lessc.

The specified git URL may be that of the official lessc repo or a fork.


[tilde version range]: https://npmjs.org/doc/json.html#Tilde-Version-Ranges
[git URL as a dependency]: https://npmjs.org/doc/json.html#Git-URLs-as-Dependencies

### Server-Side and Command Line Usage

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OSX and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

### Command line usage

```bash
lessc [option option=parameter ...] <source> [destination]
```

If source is set to `-' (dash or hyphen-minus), input is read from stdin.

#### Examples

```bash
# compile bootstrap.less to bootstrap.css
$ lessc bootstrap.less bootstrap.css

# compile bootstrap.less to bootstrap.css and minify (compress) the result
$ lessc -x bootstrap.less bootstrap.css
```

#### --help, -h

Prints above help message and exits.

#### Include paths

lessc --include-path=PATH1;PATH2

Set include paths. Separated by `:'. Use `;' on Windows.

{ paths: ['PATH1', 'PATH2']  }


```bash
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

-------------------------- Deprecated ----------------
  -O0, -O1, -O2            Set the parser's optimization level. The lower
                           the number, the less nodes it will create in the
                           tree. This could matter for debugging, or if you
                           want to access the individual nodes in the tree.
  --line-numbers=TYPE      Outputs filename and line numbers.
                           TYPE can be either 'comments', which will output
                           the debug info within comments, 'mediaquery'
                           that will output the information within a fake
                           media query which is compatible with the SASS
                           format, and 'all' which will do both.
  --verbose                Be verbose.
```