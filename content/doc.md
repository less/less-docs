As an extension to CSS, LESS is not only backwards compatible with CSS, but the extra features it adds use <em>existing</em> CSS syntax. This makes learning LESS a <em>breeze</em>, and if in doubt, lets you fall back to CSS.

## # Variables

These are pretty self-explanatory:

```less
@nice-blue: #5B83AD;
@light-blue: (@nice-blue + #111);

#header {
  color: @light-blue;
}
```

Compiles to:

```css
#header {
  color: #6c94be;
}
```

It is also possible to define variables with a _variable name_:

```less
@fnord: "I am fnord.";
@var: 'fnord';

.label {
  content: @@var;
}
```

Which compiles to:

```css
.label {
  content: "I am fnord.";
}
```

When defining a variable twice, the last definition of the variable is used, searching from the current scope upwards. This is similar to css itself where the last property inside a definition is used to determine the value.

For instance:

```less
@var: 0;
.class1 {
  @var: 1;
  .class {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```

Compiles to:

```css
.class1 .class {
  three: 3;
}
.class {
  one: 1;
}
```

Variables are lazy loaded and do not have to be declared before being used.

Valid less snippet:

```less
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;
```


this is valid less too:

```less
.lazy-eval-scope {
  width: @var;
  @a: 9%;
}

@var: @a;
@a: 100%;
```

both compile into:

```css
.lazy-eval-scope {
  width: 9%;
}
```


## Mixins

In LESS, it is possible to include a bunch of properties from one ruleset into another ruleset. So say we have the following class:

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

And we want to use these properties inside other rulesets. Well, we just have to drop in the name of
the class in any ruleset we want to include its properties, like so:

```css
#menu a {
  color: #111;
  .bordered;
}
.post a {
  color: red;
  .bordered;
}
```

The properties of the `.bordered` class will now appear in both `#menu a` and `.post a`:

```css
#menu a {
  color: #111;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
.post a {
  color: red;
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

Any CSS *class* or *id* ruleset can be mixed-in that way.

Note: Variables are also mixed in, so variables from a mixin will be placed into the current scope. This is contentious and may change in the future.

## Parametric Mixins

LESS has a special type of ruleset which can be mixed in like classes, but accepts parameters. Here's the canonical example:

```less
.border-radius (@radius) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
```

And here's how we can mix it into various rulesets:

```less
#header {
  .border-radius(4px);
}
.button {
  .border-radius(6px);
}
```

Parametric mixins can also have default values for their parameters:

```less
.border-radius (@radius: 5px) {
  border-radius: @radius;
  -moz-border-radius: @radius;
  -webkit-border-radius: @radius;
}
```

We can invoke it like this now:

```less
#header {
  .border-radius;
}
```

And it will include a 5px border-radius.

You can also use parametric mixins which don't take parameters. This is useful if you want to hide the ruleset from the CSS output,
but want to include its properties in other rulesets:

```less
.wrap () {
  text-wrap: wrap;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}

pre { .wrap }
```

Which would output:

```css
pre {
  text-wrap: wrap;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  word-wrap: break-word;
}
```

### Mixins With Multiple Parameters
Parameters are either *semicolon* or *comma* separated. It is recommended to use *semicolon*. The symbol comma has double meaning: it can be interpreted either as a mixin parameters separator or css list separator.

Using comma as mixin separator makes it impossible to create comma separated lists as an argument. On the other hand, if the compiler sees at least one semicolon inside mixin call or declaration, it assumes that arguments are separated by semicolons and all commas belong to css lists:

* two arguments and each contains comma separated list: `.name(1, 2, 3; something, else)`,
* three arguments and each contains one number: `.name(1, 2, 3)`,
* use dummy semicolon to create mixin call with one argument containing comma separated css list: `.name(1, 2, 3;)`,
* comma separated default value: `.name(@param1: red, blue;)`.

It is legal to define multiple mixins with the same name and number of parameters. Less will use properties of all that can apply. If you used the mixin with one parameter e.g. `.mixin(green);`, then properties of all mixins with exactly one mandatory parameter will be used:

```less
.mixin(@color) {
  color-1: @color;
}
.mixin(@color; @padding:2) {
  color-2: @color;
  padding-2: @padding;
}
.mixin(@color; @padding; @margin: 2) {
  color-3: @color;
  padding-3: @padding;
  margin: @margin @margin @margin @margin;
}
.some .selector div {
  .mixin(#008000);
}
```

compiles into:

```css
.some .selector div {
  color-1: #008000;
  color-2: #008000;
  padding-2: 2;
}
```


### The `@arguments` variable

`@arguments` has a special meaning inside mixins, it contains all the arguments passed, when the mixin was called. This is useful
if you don't want to deal with individual parameters:

```less
.box-shadow (@x: 0; @y: 0; @blur: 1px; @color: #000) {
  -webkit-box-shadow: @arguments;
     -moz-box-shadow: @arguments;
          box-shadow: @arguments;
}
.big-block {
  .box-shadow(2px; 5px);
}
```

Which results in:

```css
.big-block {
  -webkit-box-shadow: 2px 5px 1px #000;
     -moz-box-shadow: 2px 5px 1px #000;
          box-shadow: 2px 5px 1px #000;
}
```

### Advanced arguments and the `@rest` variable

You can use `...` if you want your mixin to take a variable number of arguments. Using this after a variable name will assign those arguments to the variable.

```less
.mixin (...) {        // matches 0-N arguments
.mixin () {           // matches exactly 0 arguments
.mixin (@a: 1) {      // matches 0-1 arguments
.mixin (@a: 1; ...) { // matches 0-N arguments
.mixin (@a; ...) {    // matches 1-N arguments
```

Furthermore:

```less
.mixin (@a; @rest...) {
   // @rest is bound to arguments after @a
   // @arguments is bound to all arguments
}
```

## The Keyword !important
Use the !important keyword after mixin call to mark all properties brought by it as !important:

Sample input:

```less
.mixin (@a: 0) {
  border: @a;
  boxer: @a;
}
.unimportant {
  .mixin(1);
}
.important {
  .mixin(2) !important;
}
```

compiled into:

```css
.unimportant {
  border: 1;
  boxer: 1;
}
.important {
  border: 2 !important;
  boxer: 2 !important;
}
```

## Pattern-matching and Guard expressions

Sometimes, you may want to change the behaviour of a mixin,
based on the parameters you pass to it. Let's start with something
basic:

```less
.mixin (@s; @color) { ... }

.class {
  .mixin(@switch; #888);
}
```

Now let's say we want `.mixin` to behave differently, based on the value of `@switch`,
we could define `.mixin` as such:

```less
.mixin (dark; @color) {
  color: darken(@color, 10%);
}
.mixin (light; @color) {
  color: lighten(@color, 10%);
}
.mixin (@_; @color) {
  display: block;
}
```

Now, if we run:

```less
@switch: light;

.class {
  .mixin(@switch; #888);
}
```

We will get the following CSS:

```css
.class {
  color: #a2a2a2;
  display: block;
}
```

Where the color passed to `.mixin` was lightened. If the value of `@switch` was `dark`,
the result would be a darker color.

Here's what happened:

* The first mixin definition didn't match because it expected `dark` as the first argument.
* The second mixin definition matched, because it expected `light`.
* The third mixin definition matched because it expected any value.

Only mixin definitions which matched were used. Variables match and bind to any value.
Anything other than a variable matches only with a value equal to itself.

We can also match on arity, here's an example:

```less
.mixin (@a) {
  color: @a;
}
.mixin (@a; @b) {
  color: fade(@a; @b);
}
```

Now if we call `.mixin` with a single argument, we will get the output of the first definition,
but if we call it with *two* arguments, we will get the second definition, namely `@a` faded to `@b`.

### Guards

Guards are useful when you want to match on *expressions*, as opposed to simple values or arity. If you are
familiar with functional programming, you have probably encountered them already.

In trying to stay as close as possible to the declarative nature of CSS, LESS has opted to implement
conditional execution via **guarded mixins** instead of if/else statements, in the vein of `@media`
query feature specifications.

Let's start with an example:

```less
.mixin (@a) when (lightness(@a) >= 50%) {
  background-color: black;
}
.mixin (@a) when (lightness(@a) < 50%) {
  background-color: white;
}
.mixin (@a) {
  color: @a;
}
```

The key is the **`when`** keyword, which introduces a guard sequence (here with only one guard). Now if we run the following
code:

```less
.class1 { .mixin(#ddd) }
.class2 { .mixin(#555) }
```

Here's what we'll get:

```css
.class1 {
  background-color: black;
  color: #ddd;
}
.class2 {
  background-color: white;
  color: #555;
}
```

The full list of comparison operators usable in guards are: **`> >= = =< <`**. Additionally, the keyword `true`
is the only truthy value, making these two mixins equivalent:

```
.truth (@a) when (@a) { ... }
.truth (@a) when (@a = true) { ... }
```

Any value other than the keyword `true` is falsy:

```less
.class {
  .truth(40); // Will not match any of the above definitions.
}
```

Guards can be separated with a comma '`,`'--if any of the guards evaluates to true, it's
considered as a match:

```less
.mixin (@a) when (@a > 10), (@a < -10) { ... }
```

Note that you can also compare arguments with each other, or with non-arguments:

```
    @media: mobile;

    .mixin (@a) when (@media = mobile) { ... }
    .mixin (@a) when (@media = desktop) { ... }

    .max (@a; @b) when (@a > @b) { width: @a }
    .max (@a; @b) when (@a < @b) { width: @b }
```

Lastly, if you want to match mixins based on value type, you can use the *is\** functions:

```
    .mixin (@a; @b: 0) when (isnumber(@b)) { ... }
    .mixin (@a; @b: black) when (iscolor(@b)) { ... }
```

Here are the basic type checking functions:

* `iscolor`
* `isnumber`
* `isstring`
* `iskeyword`
* `isurl`

If you want to check if a value, in addition to being a number, is in a specific unit, you may use one of:

* `ispixel`
* `ispercentage`
* `isem`
* `isunit`

Last but not least, you may use the **`and`** keyword to provide additional conditions inside a guard:

```
    .mixin (@a) when (isnumber(@a)) and (@a > 0) { ... }
```

And the **`not`** keyword to negate conditions:

```
    .mixin (@b) when not (@b > 0) { ... }
```

## Nested rules

LESS gives you the ability to use *nesting* instead of, or in combination with cascading.
Lets say we have the following CSS:

```
    #header { color: black; }
    #header .navigation {
      font-size: 12px;
    }
    #header .logo {
      width: 300px;
    }
    #header .logo:hover {
      text-decoration: none;
    }
```

In LESS, we can also write it this way:

```
    #header {
      color: black;

      .navigation {
        font-size: 12px;
      }
      .logo {
        width: 300px;
        &:hover { text-decoration: none }
      }
    }
```

Or this way:

```
    #header        { color: black;
      .navigation  { font-size: 12px }
      .logo        { width: 300px;
        &:hover    { text-decoration: none }
      }
    }
```

The resulting code is more concise, and mimics the structure of your `DOM tree`.

Notice the `&` combinator - it's used when you want a nested selector to be concatenated to its parent selector, instead
of acting as a descendant. This is especially important for pseudo-classes like `:hover` and `:focus`.

For example:

```
    .bordered {
      &.float {
        float: left;
      }
      .top {
        margin: 5px;
      }
    }
```

Will output

```
    .bordered.float {
      float: left;
    }
    .bordered .top {
      margin: 5px;
    }
```

## Nested Media Queries

Media queries can be nested in the same way as selectors e.g.

```
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

```
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

## Advanced Usage of `&`

The & symbol can be used in selectors in order to reverse the ordering of the nesting and to multiply classes.

For example:

```
    .child, .sibling {
        .parent & {
            color: black;
        }
        & + & {
            color: red;
        }
    }
```

Will output

```
    .parent .child,
    .parent .sibling {
        color: black;
    }
    .child + .child,
    .child + .sibling,
    .sibling + .child,
    .sibling + .sibling {
        color: red;
    }
```

You can also use & in mixins in order to reference nesting that is outside of your mixin.

## Operations

Any number, color or variable can be operated on. Operations should be performed
within parentheses. Here are a couple of examples:

```
    @base: 5%;
    @filler: (@base * 2);
    @other: (@base + @filler);

    color: (#888 / 4);
    background-color: (@base-color + #111);
    height: (100% / 2 + @filler);
```

The output is pretty much what you expect—LESS understands the difference between colors and units. If a unit is used in an operation, like in:

```
    @var: (1px + 5);
```

LESS will use that unit for the final output—`6px` in this case.

Extra parentheses are also authorized in operations:

```
    width: ((@var + 5) * 2);
```

## Functions

LESS provides a variety of functions which transform colors, manipulate strings and do maths.
They are documented fully in the function reference.

Using them is pretty straightforward. The following example uses percentage to convert 0.5 to 50%,
increases the saturation of a base color by 5% and then sets the background color to one that is lightened by
25% and spun by 8 degrees:

```
    @base: #f04615;
    @width: 0.5;

    .class {
      width: percentage(0.5); // returns `50%`
      color: saturate(@base, 5%);
      background-color: spin(lighten(@base, 25%), 8);
    }
```

## Namespaces

Sometimes, you may want to group your variables or mixins, for organizational purposes, or just to offer some encapsulation.
You can do this pretty intuitively in LESS—say you want to bundle some mixins and variables under `#bundle`, for later re-use, or for distributing:

```
    #bundle {
      .button () {
        display: block;
        border: 1px solid black;
        background-color: grey;
        &:hover { background-color: white }
      }
      .tab { ... }
      .citation { ... }
    }
```

Now if we want to mixin the `.button` class in our `#header a`, we can do:

```
    #header a {
      color: orange;
      #bundle > .button;
    }
```

## Scope

Scope in LESS is very similar to that of programming languages. Variables and mixins are first looked up locally,
and if they aren't found, the compiler will look in the parent scope, and so on.

```
    @var: red;

    #page {
      @var: white;
      #header {
        color: @var; // white
      }
    }

    #footer {
      color: @var; // red
    }
```

## Comments

CSS-style comments are preserved by LESS:

```
    /* Hello, I'm a CSS-style comment */
    .class { color: black }
```

Single-line comments are also valid in LESS, but they are 'silent',
they don't show up in the compiled CSS output:

```
    // Hi, I'm a silent comment, I won't show up in your CSS
    .class { color: white }
```

## Importing

You can import both CSS and LESS files. Only LESS files import statements are processed, CSS file import statements are kept as they are. If you want to import a CSS file, and don't want LESS to process it, just use the `.css` extension:

```
    @import "lib.css";
```

Compilation makes only one change to CSS file imports: top level CSS file imports are moved on top of the sheet, right after @charset declarations.

Input file with import statement:

```
    h1 { color: green; }
    @import "import/official-branding.css?urlParameter=23";
```

import statement has been moved on top:

```
    @import "import/official-branding.css?urlParameter=23";
    h1 { color: green; }
```

Content of imported LESS file is copied into importing style sheet and compiled together with it. Importing and imported files share all mixins, namespaces, variables and other structures.

In addition, if the import statement has media queries specified in it, imported content is enclosed in the `@Media` declaration.

Imported "library.less":

```
    @imported-color: red;
    h1 { color: green; }
```

Main file imports the above library.less file:

```
    @import "library.less" screen and (max-width: 400px); // import with media queries
    @import "library.less"; // import without media queries

    .class {
      color: @importedColor; // use imported variable
    }
```

Compiled output:

```
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

```
    pre {
      @import "library.less";
      color: @importedColor;
    }
```

both variable and ruleset defined in "library.less" have been copied into the `pre` ruleset:

```
    pre {
      color: #ff0000; // variable defined in library.less was available
    }
    pre h1 { // ruleset defined in library.less was nested into 'pre' ruleset
      color: green;
    }
```

In v1.3.0 - v1.3.3 `@import` imports a file multiple times and you can override this behaviour with `@import-once`.

In v1.4.0 `@import-once` has been removed and `@import` imports once by default. This means that with the following

```
   @import "file.less";
   @import "file.less";
```

The second file is ignored.

Any file that does not end with `.css` is considered less file and processed. In addition, if the file name has no extension or parameters, the ".less" suffix is added on the end. Both of these are equivalent:

```
    @import "lib.less";
    @import "lib";
```

In v1.4.0 you can force a file to be interpreted as a particular type by specifying an option, e.g.

```
    @import (css) "lib";
```

Will output..

```
    @import "lib";
```

and

```
    @import (less) "lib.css";
```

Will import the lib.css file and treat it as less. If you specify a file is less and do not include an extension, none will be added.


## String interpolation

Variables can be embedded inside strings in a similar way to Ruby or PHP, with the `@{name}` construct:

```
    @base-url: "http://assets.fnord.com";
    background-image: url("@{base-url}/images/bg.png");
```

## Escaping

Sometimes you might need to output a CSS value which is either not valid CSS syntax,
or uses proprietary syntax which LESS doesn't recognize.

To output such value, we place it inside a string prefixed with `~`, for example:

```
    .class {
      filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";
    }
```

This is called an "escaped value", which will result in:

```
    .class {
      filter: ms:alwaysHasItsOwnSyntax.For.Stuff();
    }
```

Escaped values can use the interpolation exactly the same way as strings:

```
    .class {
      @what: "Stuff";
      filter: ~"ms:alwaysHasItsOwnSyntax.For.@{what}()";
    }
```


## Selector Interpolation

If you want to use LESS variables inside selectors, you can do this by referencing the variable using `@{selector}` as
in string interpolation. For example:

```
    @name: blocked;
    .@{name} {
        color: black;
    }
```

will output

```
    .blocked {
        color: black;
    }
```

Note: prior to LESS 1.3.1 a `(~"@{name}")` type of selector was supported. Support for this will be removed in 1.4.0.


## Media Queries as Variables

If you want to use less variables inside media, you can do this using the usual variable variable referencing syntax `@variable`. For example:

```
    @singleQuery: ~"(max-width: 500px)";
    @media screen, @singleQuery {
      set {
        padding: 3 3 3 3;
      }
    }
```

compiles into:

```
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

```
    @var: `"hello".toUpperCase() + '!'`;
```

Becomes:

```
    @var: "HELLO!";
```

Note that you may also use interpolation and escaping as with strings:

```
    @str: "hello";
    @var: ~`"@{str}".toUpperCase() + '!'`;
```

Becomes:

```
    @var: HELLO!;
```

It is also possible to access the JavaScript environment:

```
    @height: `document.body.clientHeight`;
```

If you want to parse a JavaScript string as a hex color, you may use the `color` function:

```
    @color: color(`window.colors.baseColor`);
    @darkcolor: darken(@color, 10%);
```

