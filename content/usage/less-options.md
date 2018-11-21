---
title: Less.js Options
---
## Cross-Platform Options

### Include Paths

| | |
|---|---|
| `lessc --include-path=PATH1;PATH2` | `{ paths: ['PATH1', 'PATH2'] }` |

If the file in an `@import` rule does not exist at that exact location, Less will look for it at the location(s) passed to this option. You might use this for instance to specify a path to a library which you want to be referenced simply and relatively in the Less files.

### Rootpath

| | |
|---|---|
| `lessc -rp=resources/`<br>`lessc --rootpath=resources/` | `{ rootpath: 'resources/' }` |


Allows you to add a path to every generated import and url in your css. This does not affect Less import statements that are processed, just ones that are left in the output css.

For instance, if all the images the css use are in a folder called resources, you can use this option to add this on to the URL's and then have the name of that folder configurable.

### Rewrite URLs

| | |
|---|---|
| `lessc -ru=off`<br>`lessc --rewrite-urls=off` | `{ rewriteUrls: 'off' }` |
| `lessc -ru=all`<br>`lessc --rewrite-urls=all` | `{ rewriteUrls: 'all' }` |
| `lessc -ru=local`<br>`lessc --rewrite-urls=local` | `{ rewriteUrls: 'local' }` |

By default URLs are kept as-is (`off`), so if you import a file in a sub-directory that references an image, exactly the same URL will be output in the css. This option allows you to rewrite URLs in imported files so that the URL is always relative to the base file that has been passed to Less. E.g.

```css
/* main.less */
@import "global/fonts.less";
```

```css
/* global/fonts.less */
@font-face {
  font-family: 'MyFont';
  src: url('myfont/myfont.woff2') format('woff2');
}
```

With nothing set or with `rewriteUrls:  'off'`, compiling `main.less` will output:

```css
/* main.less */
/* global/fonts.less */
@font-face {
  font-family: 'MyFont';
  src: url('myfont/myfont.woff2') format('woff2');
}
```

With `rewriteUrls: 'all'`, it will output:

```css
/* main.less */
/* global/fonts.less */
@font-face {
  font-family: 'MyFont';
  src: url('./global/myfont/myfont.woff2') format('woff2');
}
```

With `rewriteUrls: 'local'`, it will only rewrite URLs that are explicitly relative (those starting with a `.`):

```css
url('./myfont/myfont.woff2') /* becomes */ url('./global/myfont/myfont.woff2')
url('myfont/myfont.woff2') /* stays */ url('myfont/myfont.woff2')
```

This can be useful in case you're combining Less with [CSS Modules](https://github.com/css-modules/css-modules) which use similar resolving semantics like Node.js.

You may also want to consider using the data-uri function instead of this option, which will embed images into the css.

### Math

_Released v3.7.0_

| | |
|---|---|
| `lessc -m=[option]`<br>`lessc --math=[option]` | `{ math: '[option]' }` |

Less has re-built math options to offer an in-between feature between the previous `strictMath` setting, which required parentheses all the time, and the default, which performed math in all situations.

In order to cause fewer conflicts with CSS, which now liberally uses the `/` symbol between values, there is now a math mode that _only_ requires parentheses for division. "Strict math" has also been tweaked to operate more intuitively, although the legacy behavior is supported.

The for options available for `math` are:

- `always`  (current default) - Less eagerly does math
- `parens-division` **(future default)** - No division is performed outside of parens using `/` operator (but can be "forced" outside of parens with `./` operator)
- `parens` | `strict` - A more intuitive form of legacy `strictMath: true`
- `strict-legacy` (deprecated) - As named, operates exactly like current `strictMath: true`, with the exception that `width: -(1);` (single dimension values in parens) will now output `width: -1;` vs previous behavior of `width: -(1)`

**always**
Example:
```less
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: 2px ./ 2;
  d: (2px / 2);
}
```
Outputs:
```css
.math {
  a: 2;
  b: 1px;
  c: 1px;
  d: 1px;
}
```

**parens-division**

Example:
```less
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: 2px ./ 2;
  d: (2px / 2);
}
```
Outputs:
```css
.math {
  a: 2;
  b: 2px / 2;
  c: 1px;
  d: 1px;
}
```

**strict**
```less
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: (2px / 2) + (3px / 1);
}
```
Output:
```css
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: 1px + 3px;
}
```

**strict-legacy**

In legacy `strictMath` mode, mixed expressions outside of parentheses means entire parentheses won't evaluate. (Probably not what you want.)

```less
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: (2px / 2) + (3px / 1);
}
```
Output:
```css
.math {
  a: 1 + 1;
  b: 2px / 2;
  c: (2px / 2) + (3px / 1);
}
```

#### Strict Math (Deprecated)

_This has been replaced by the [`math`](#less-options-math) option._



#### Relative URLs (deprecated)

| | |
|---|---|
| `lessc -ru`<br>`lessc --relative-urls` | `{ relativeUrls: true }` |

_Has been replaced by `rewriteUrls: "all"`_


### Strict Units

| | |
|---|---|
| `lessc -su=on`<br>`lessc --strict-units=on` | `{ strictUnits: true }` |

Defaults to off/false.

Without this option, Less attempts to guess at the output unit when it does maths. For instance

```less
.class {
  property: 1px * 2px;
}
```

In this case, things are clearly not right - a length multiplied by a length gives an area, but css does not support specifying areas. So we assume that the user meant for one of the values to be a value, not a unit of length and we output `2px`.

With strict units on, we assume this is a bug in the calculation and throw an error.

#### IE8 Compatibility (Deprecated)

| | |
|---|---|
| `lessc --ie-compat` | `{ ieCompat: true }` |

False by default starting in v3.0.0. Currently only used for the data-uri function to ensure that images aren't created that are too large for the browser to handle.

#### Enable Inline JavaScript (Deprecated)

| | |
|---|---|
| `lessc --js` | `{ javascriptEnabled: true }` |

False by default starting in v3.0.0. Enables evaluation of JavaScript inline in `.less` files. This created a security problem for some developers who didn't expect user input for style sheets to have executable code.

Replaced with the `@plugin` option.

#### Global Variables

| | |
|---|---|
| `lessc --global-var="color1=red"` | `{ globalVars: { color1: 'red' } }` |

This option defines a variable that can be referenced by the file. Effectively the declaration is put at the top of your base Less file, meaning it can be used but it also can be overridden if this variable is defined in the file.

#### Modify Variables

| | |
|---|---|
| `lessc --modify-var="color1=red"` | `{ modifyVars: { color1: 'red' } }` |

As opposed to the global variable option, this puts the declaration at the end of your base file, meaning it will override anything defined in your Less file.

#### URL Arguments

| | |
|---|---|
| `lessc --url-args="cache726357"` | `{ urlArgs: 'cache726357' }` |

This option allows you to specify a argument to go on to every URL. This may be used for cache-busting for instance.

#### Line Numbers (Deprecated)

| | |
|---|---|
| `lessc --line-numbers=comments`<br>`lessc --line-numbers=mediaquery`<br>`lessc --line-numbers=all` | `{ dumpLineNumbers: 'comments' }` |

Generates inline source-mapping. This was the only option before browsers started supporting sourcemaps. 

#### Pre-Loaded Plugin

See: [Pre-Loaded Plugins](#plugins)


#### Lint

| | |
|---|---|
| `lessc --lint -l` | `{ lint: true }` |

Runs the less parser and just reports errors without any output.


#### Compress (Deprecated)

| | |
|---|---|
| `lessc --compress -x` | `{ compress: true }` |

Compress using less built-in compression. This does an okay job but does not utilise all the tricks of dedicated css compression. In general, we recommend looking at third-party tools that clean and compress CSS after your Less has been transformed to CSS.


#### Allow Imports from Insecure HTTPS Hosts

| | |
|---|---|
| `lessc --insecure` | `{ insecure: true }` |


## Source Map Options

Most of these options are not applicable to using Less.js in the browser, as you should generate a source map with your pre-compiled Less files.

#### Generate a Source Map

| | |
|---|---|
| `lessc --source-map` | `{ sourceMap: {} }` |

Tells less to generate a sourcemap.

#### Source Map Output Filename

| | |
|---|---|
| `lessc --source-map=file.map` | `{ sourceMap: { outputFilename: 'file.map' } }` |

#### Source Map Rootpath

| | |
|---|---|
| `lessc --source-map-rootpath=dev-files/` | `{ sourceMap: { sourceMapRootpath: 'dev-files/' } }` |

Specifies a rootpath that should be prepended to each of the less file paths inside the sourcemap and also to the path to the map file specified in your output css.

Because the basepath defaults to the directory of the input less file, the rootpath defaults to the path from the sourcemap output file to the base directory of the input less file.

Use this option if for instance you have a css file generated in the root on your web server but have your source less/css/map files in a different folder. So for the option above you might have

```bash
output.css
dev-files/output.map
dev-files/main.less
```

#### Source Map Basepath

| | |
|---|---|
| `lessc --source-map-basepath=less-files/` | `{ sourceMap: { sourceMapBasepath: 'less-files/' } }` |

This is the opposite of the rootpath option, it specifies a path which should be removed from the output paths. For instance if you are compiling a file in the less-files directory but the source files will be available on your web server in the root or current directory, you can specify this to remove the additional `less-files` part of the path.

It defaults to the path to the input less file.

#### Include Less Source in the Source Map

| | |
|---|---|
| `lessc --source-map-include-source` | `{ sourceMap: { outputSourceFiles: true } }` |

This option specifies that we should include all of the Less files in to the sourcemap. This means that you only need your map file to get to your original source.

This can be used in conjunction with the map inline option so that you do not need to have any additional external files at all.

#### Source Map Map Inline

| | |
|---|---|
| `lessc --source-map-inline` | `{ sourceMap: { sourceMapFileInline: true } }` |

This option specifies that the map file should be inline in the output CSS. This is not recommended for production, but for development it allows the compiler to produce a single output file which in browsers that support it, use the compiled css but show you the non-compiled less source.

#### Source Map URL

| | |
|---|---|
| `lessc --source-map-url=../my-map.json` | `{ sourceMap: { sourceMapURL: '../my-map.json' } }` |

Allows you to override the URL in the css that points at the map file. This is for cases when the rootpath and basepath options are not producing exactly what you need.


