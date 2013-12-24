## Nested Media Queries

Media queries can be nested in the same way as selectors e.g.

```less
.one {
  @media (width: 400px) {
    font-size: 1.2em;
    @media print and color {
      color: blue;
    }
  }
}
```

Will output

```css
@media (width: 400px) {
  .one {
    font-size: 1.2em;
  }
}
@media (width: 400px) and print and color {
  .one {
    color: blue;
  }
}
```

## Importing

You can import both CSS and LESS files. Only LESS files import statements are processed, CSS file import statements are kept as they are. If you want to import a CSS file, and don't want LESS to process it, just use the `.css` extension:

```
@import "lib.css";
```

Compilation makes only one change to CSS file imports: top level CSS file imports are moved on top of the sheet, right after @charset declarations.

Input file with import statement:

```less
h1 { color: green; }
@import "import/official-branding.css?urlParameter=23";
```

import statement has been moved on top:

```less
@import "import/official-branding.css?urlParameter=23";
h1 { color: green; }
```

Content of imported LESS file is copied into importing style sheet and compiled together with it. Importing and imported files share all mixins, namespaces, variables and other structures.

In addition, if the import statement has media queries specified in it, imported content is enclosed in the `@Media` declaration.

Imported "library.less":

```less
@imported-color: red;
h1 { color: green; }
```

Main file imports the above library.less file:

```less
@import "library.less" screen and (max-width: 400px); // import with media queries
@import "library.less"; // import without media queries

.class {
  color: @importedColor; // use imported variable
}
```

Compiled output:

```less
// Corresponds to import with media queries
@media screen and (max-width: 400px) {
  h1 { color: green; }
}

// Corresponds to import without media queries
h1 { color: green; }
.class {
  // Use imported variable
  color: #ff0000;
}
```

LESS file import statement does not have to be located on top of the style sheet. It can be placed also inside rulesets, mixins or other LESS structures.

Import into ruleset:

```less
pre {
  @import "library.less";
  color: @importedColor;
}
```

both variable and ruleset defined in "library.less" have been copied into the `pre` ruleset:

```css
pre {
  color: #ff0000; // variable defined in library.less was available
}
pre h1 { // ruleset defined in library.less was nested into 'pre' ruleset
  color: green;
}
```

In v1.3.0 - v1.3.3 `@import` imports a file multiple times and you can override this behaviour with `@import-once`.

In v1.4.0 `@import-once` has been removed and `@import` imports once by default. This means that with the following

```less
@import "file.less";
@import "file.less";
```

The second file is ignored.

Any file that does not end with `.css` is considered less file and processed. In addition, if the file name has no extension or parameters, the ".less" suffix is added on the end. Both of these are equivalent:

```less
@import "lib.less";
@import "lib";
```

In v1.4.0 you can force a file to be interpreted as a particular type by specifying an option, e.g.

```less
@import (css) "lib";
```

Will output..

```css
@import "lib";
```

and

```less
@import (less) "lib.css";
```

Will import the lib.css file and treat it as less. If you specify a file is less and do not include an extension, none will be added.


## String interpolation

Variables can be embedded inside strings in a similar way to Ruby or PHP, with the `@{name}` construct:

```less
@base-url: "http://assets.fnord.com";
background-image: url("@{base-url}/images/bg.png");
```

## Escaping

Sometimes you might need to output a CSS value which is either not valid CSS syntax,
or uses proprietary syntax which LESS doesn't recognize.

To output such value, we place it inside a string prefixed with `~`, for example:

```less
.class {
  filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";
}
```

This is called an "escaped value", which will result in:

```css
.class {
  filter: ms:alwaysHasItsOwnSyntax.For.Stuff();
}
```

Escaped values can use the interpolation exactly the same way as strings:

```less
.class {
  @what: "Stuff";
  filter: ~"ms:alwaysHasItsOwnSyntax.For.@{what}()";
}
```


## Selector Interpolation

If you want to use LESS variables inside selectors, you can do this by referencing the variable using `@{selector}` as
in string interpolation. For example:

```less
@name: blocked;
.@{name} {
    color: black;
}
```

will output

```css
.blocked {
    color: black;
}
```

Note: prior to LESS 1.3.1 a `(~"@{name}")` type of selector was supported. Support for this will be removed in 1.4.0.


## Media Queries as Variables

If you want to use less variables inside media, you can do this using the usual variable variable referencing syntax `@variable`. For example:

```less
@singleQuery: ~"(max-width: 500px)";
@media screen, @singleQuery {
  set {
    padding: 3 3 3 3;
  }
}
```

compiles into:

```css
@media screen, (max-width: 500px) {
  set {
    padding: 3 3 3 3;
  }
}
```

The variable must contain whole media query. This would cause an error: `@media screen and @partial {`.

In 1.4.0, without strict maths off, you can also include variables in media values, e.g. `@media screen, (max-width: @width) {`.

## JavaScript evaluation

JavaScript expressions can be evaluated as values inside .less files. We recommend using caution with this feature
as the LESS will not be compilable by ports and it makes the LESS harder to maintain. If possible, try to think of a
function that can be added to achieve the same purpose and ask for it on github. We have plans to allow expanding the
default functions available. However, if you still want to use JavaScript in .less, this is done by wrapping the expression
with back-ticks:

```less
@var: `"hello".toUpperCase() + '!'`;

.foo {
  content: @var;
}
```

Becomes:

```css
.foo {
  content: "HELLO!";
}
```

Note that you may also use interpolation and escaping as with strings:

```less
@str: "hello";
@var: ~`"@{str}".toUpperCase() + '!'`;
.foo {
  content: @var;
}
```

Becomes:

```css
.foo {
  content: "HELLO!";
}
```

It is also possible to access the JavaScript environment:

```less
@height: `document.body.clientHeight`;
```

If you want to parse a JavaScript string as a hex color, you may use the `color` function:

```less
@color: color(`window.colors.baseColor`);
@darkcolor: darken(@color, 10%);
```

