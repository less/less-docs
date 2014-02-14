---
title: Command Line Usage
---

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [GUIs for Less](#guis-for-less).</span>

### Installing lessc for use globally

Install with [npm](https://www.npmjs.org/)

```bash
npm install less -g
```

and then you will have the `lessc` command available globally. For a specific version (or tag) you can add `@VERSION` after our package name, e.g. `npm install less@1.6.2 -g`.

### Installing for node development

Alternatively if you don't use the compiler globally, you may be after

```bash
npm i less --save-dev
```

This will install the latest official version of lessc in your project folder, also adding it to the `devDependencies` in your project's `package.json`.

Note that a [tilde version range][] will be automatically specified in `package.json`. This is good, as new patch releases of the latest version will be installable by npm.

#### Beta releases of lessc

Periodically, as new functionality is being developed, lessc builds will be published to npm, tagged as. These builds will _not_ be published as a `@latest` official release, and will typically have a build number or alpha/beta/release candidate designation.

Since patch releases are non-breaking we will publish patch releases immediately and alpha/beta/candidate versions will be published as minor or major version upgrades (we endevour since 1.4.0 to follow [semantic versioning](http://semver.org/)).

#### Installing an unpublished development version of lessc

If you want to install a bleeding-edge, unpublished version of lessc, follow the instructions for specifying a [git URL as a dependency][] and be sure to specify an actual commit SHA (not a branch name) as the `commit-ish`. This will guarantee that your project always uses that exact version of lessc.

The specified git URL may be that of the official lessc repo or a fork.


[tilde version range]: https://www.npmjs.org/doc/misc/semver.html#Ranges
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

### Help

```bash
lessc --help
lessc --h
```

Prints a help message with available options and exits.

### Include paths

```bash
lessc --include-path=PATH1;PATH2
```

Sets available include paths. Separated by ':' or ';' on Windows.

Use this to configure a list of paths which less will use to find imports in. You might use this for instance to specify a path to a library which you want to be referenced simply and relatively in the less files.

In node, set a paths option
```js
{ paths: ['PATH1', 'PATH2']  }
```

### Makefile

```bash
lessc -M
lessc --depends
```

### No Color

```bash
lessc --no-color
```

### No IE Compatability

```bash
lessc --no-ie-compat
```

Currently only used for the data-uri function to ensure that images aren't created that are too large for the browser to handle.

### Disable JavaScript

```bash
lessc --no-js
```

### Lint

```bash
lessc --lint
lessc --l
```

Runs the less parser and just reports errors without any output.

### Silent

```bash
lessc -s
lessc --silent
```

### Strict Imports

```bash
lessc --strict-imports
```

### Allow imports from insecure https hosts

```bash
lessc --insecure
```

### Version

```
lessc -v
lessc --version
```

### Compress

```
lessc -x
lessc --compress
```

Compress using less built-in compression. This does an okay job but does not utilise all the tricks of dedicated css compression. Please feel free to improve our compressed output with a pull request.

###

```
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
