---
title: Command Line Usage
---

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [GUIs for Less](#guis-for-less).</span>

## Installing

Install with [npm](https://www.npmjs.org/)

```bash
npm install less -g
```

The `-g` option installs the `lessc` command available globally. For a specific version (or tag) you can add `@VERSION` after our package name, e.g. `npm install less@2.7.1 -g`.

### Installing for Node Development

Alternatively, if you don't want to use the compiler globally, you may be after

```bash
npm i less --save-dev
```

This will install the latest official version of lessc in your project folder, also adding it to the `devDependencies` in your project's `package.json`.

### Beta releases of lessc

Periodically, as new functionality is being developed, lessc builds will be published to npm, tagged as beta. These builds will _not_ be published as a `@latest` official release, and will typically have beta in the version (use `lessc -v` to get current version).

Since patch releases are non-breaking we will publish patch releases immediately and alpha/beta/candidate versions will be published as minor or major version upgrades (we endeavour since 1.4.0 to follow [semantic versioning](http://semver.org/)).


## Server-Side and Command Line Usage

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OS X and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

### Command Line Usage

```bash
lessc [option option=parameter ...] <source> [destination]
```

If source is set to `-' (dash or hyphen-minus), input is read from stdin.

#### Examples

Compile bootstrap.less to bootstrap.css

```bash 
lessc bootstrap.less bootstrap.css
```

### Options for `lessc`

#### Help

```bash
lessc --help
lessc -h
```

Prints a help message with available options and exits.

#### Include Paths

```bash
lessc --include-path=PATH1;PATH2
```

Sets available include paths. Separated by ':' or ';' on Windows.

If the file in an `@import` rule does not exist at that exact location, less will look for it at the location(s) passed to this option. You might use this for instance to specify a path to a library which you want to be referenced simply and relatively in the less files.

In node, set a paths option
```js
{ paths: ['PATH1', 'PATH2']  }
```

#### Makefile

```bash
lessc -M
lessc --depends
```

Outputs a makefile import dependency list to stdout.

#### No Color

```bash
lessc --no-color
```

#### IE8 Compatibility (Deprecated)

```bash
lessc --ie-compat
```

False by default starting in v3.0.0. Currently only used for the data-uri function to ensure that images aren't created that are too large for the browser to handle.

#### Enable Inline JavaScript

```bash
lessc --js
```

False by default starting in v3.0.0. Enables evaluation of JavaScript inline in `.less` files.

#### Lint

```bash
lessc --lint
lessc -l
```

Runs the less parser and just reports errors without any output.

#### Silent

```bash
lessc -s
lessc --silent
```

Stops any warnings from being shown.

#### Strict Imports

```bash
lessc --strict-imports
```

#### Allow Imports from Insecure HTTPS Hosts

```bash
lessc --insecure
```

#### Version

```bash
lessc -v
lessc --version
```

#### Compress

```bash
lessc -x
lessc --compress
```

Compress using less built-in compression. This does an okay job but does not utilise all the tricks of dedicated css compression. Please feel free to improve our compressed output with a pull request.

#### Clean CSS

In v2 of less, Clean CSS is no longer included as a direct dependency. To use clean css with lessc, use the [clean css plugin](https://github.com/less/less-plugin-clean-css).

#### Source Map Output Filename

```bash
lessc --source-map
lessc --source-map=file.map
```

Tells less to generate a sourcemap. If you have the sourcemap option without a filename it will use the source less file name but with the extension map.

#### Source Map Rootpath

```bash
lessc --source-map-rootpath=dev-files/
```

Specifies a rootpath that should be prepended to each of the less file paths inside the sourcemap and also to the path to the map file specified in your output css.

Because the basepath defaults to the directory of the input less file, the rootpath defaults to the path from the sourcemap output file to the base directory of the input less file.

Use this option if for instance you have a css file generated in the root on your web server but have your source less/css/map files in a different folder. So for the option above you might have

```bash
output.css
dev-files/output.map
dev-files/main.less
```

#### Source Map Basepath

```bash
lessc --source-map-basepath=less-files/
```

This is the opposite of the rootpath option, it specifies a path which should be removed from the output paths. For instance if you are compiling a file in the less-files directory but the source files will be available on your web server in the root or current directory, you can specify this to remove the additional `less-files` part of the path.

It defaults to the path to the input less file.

#### Source Map Less Inline

```bash
lessc --source-map-less-inline
```

This option specifies that we should include all of the Less files in to the sourcemap. This means that you only need your map file to get to your original source.

This can be used in conjunction with the map inline option so that you do not need to have any additional external files at all.

#### Source Map Map Inline

```bash
lessc --source-map-map-inline
```

This option specifies that the map file should be inline in the output CSS. This is not recommended for production, but for development it allows the compiler to produce a single output file which in browsers that support it, use the compiled css but show you the non-compiled less source.

#### Source Map URL

```bash
lessc --source-map-url=../my-map.json
```

Allows you to override the URL in the css that points at the map file. This is for cases when the rootpath and basepath options are not producing exactly what you need.

#### Rootpath

```bash
lessc -rp=resources/
lessc --rootpath=resources/
```

Allows you to add a path to every generated import and url in your css. This does not affect less import statements that are processed, just ones that are left in the output css.

For instance, if all the images the css use are in a folder called resources, you can use this option to add this on to the URL's and then have the name of that folder configurable.

#### Relative URLs

```bash
lessc -ru
lessc --relative-urls
```

By default URLs are kept as-is, so if you import a file in a sub-directory that references an image, exactly the same URL will be output in the css. This option allows you to re-write URL's in imported files so that the URL is always relative to the base imported file. E.g.

```less
# main.less
@import "files/backgrounds.less";
# files/backgrounds.less
.icon-1 {
  background-image: url('images/lamp-post.png');
}
```

this will output the following normally

```css
.icon-1 {
  background-image: url('images/lamp-post.png');
}
```

but with this option on it will instead output

```css
.icon-1 {
  background-image: url('files/images/lamp-post.png');
}
```

You may also want to consider using the data-uri function instead of this option, which will embed images into the css.

#### Strict Math

```bash
lessc -sm=on
lessc --strict-math=on
```

Defaults to Off.

Without this option on Less will try and process all maths in your css e.g.

```less
.class {
  height: calc(100% - 10px);
}
```

will be processed currently.

With strict math on, only maths that is inside un-necessary parenthesis will be processed. For instance.

```less
.class {
  width: calc(100% - ((10px  - 5px)));
  height: (100px / 4px);
  font-size: 1 / 4;
}
```

```css
.class {
  width: calc(100% - 5px);
  height: 25px;
  font-size: 1 / 4;
}
```

We originally planned to default this to true in the future, but it has been a controversial option and we are considering whether we have solved the problem in the right way, or whether less should just have exceptions for instances where `/` is valid or calc is used.

#### Strict Units

```bash
lessc -su=on
lessc --strict-units=on
```

Defaults to off.

Without this option, less attempts to guess at the output unit when it does maths. For instance

```less
.class {
  property: 1px * 2px;
}
```

In this case, things are clearly not right - a length multiplied by a length gives an area, but css does not support specifying areas. So we assume that the user meant for one of the values to be a value, not a unit of length and we output `2px`.

With strict units on, we assume this is a bug in the calculation and throw an error.

#### Global Variable

```bash
lessc --global-var="my-background=red"
```

This option defines a variable that can be referenced by the file. Effectively the declaration is put at the top of your base Less file, meaning it can be used but it also can be overridden if this variable is defined in the file.

#### Modify Variable

```bash
lessc --modify-var="my-background=red"
```

As opposed to the global variable option, this puts the declaration at the end of your base file, meaning it will override anything defined in your Less file.

#### URL Arguments

```bash
lessc --url-args="cache726357"
```

This option allows you to specify a argument to go on to every URL. This may be used for cache-busting for instance.

#### Line Numbers

```bash
lessc --line-numbers=comments
lessc --line-numbers=mediaquery
lessc --line-numbers=all
```

Generates inline source-mapping. This was the only option before browsers started supporting sourcemaps. We are consider deprecating, so please get in touch if you want this option to stick around.

#### Plugin

```bash
lessc --clean-css
lessc --plugin=clean-css="advanced"
```

--plugin Loads a plugin. You can also omit the --plugin= if the plugin begins
less-plugin. E.g. the clean css plugin is called less-plugin-clean-css
once installed (npm install less-plugin-clean-css), use either with
--plugin=less-plugin-clean-css or just --clean-css
specify options afterwards e.g. --plugin=less-plugin-clean-css="advanced"
or --clean-css="advanced"
