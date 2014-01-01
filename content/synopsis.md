## Important 1.4.0 Changes
We have released 1.4.0. This includes new features such as [extend][features-extend], the [data-uri][features-functions-data-uri] function and more maths functions. See the [changelog](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md) for a full list of changes.

There are some known **breaking changes**.

* `@import-once` is removed and is now default behavior for `@import`.
* `(~".myclass_@{index}") { ...` selector interpolation is deprecated, do this instead `.myclass_@{index} { ...`. This works in 1.3.1 onwards.
* The browser version no longer bundles a version of es5-shim.js - the version we previously used was inaccurate and the new version is significantly larger. Please include your choice of es-5 shim or only use on modern browsers.
* We have introduced optional [strictMath][features-strictmath] mode, where math is required to be in parenthesis. [See examples][examples-strictmath]. In 1.4.0 this option is turned off, but we intend to turn this on by default. We recommend you upgrade code and switch on the option (`--strict-math=on` in the command line or `strictMath: true` in JavaScript). Code written with brackets is backwards compatible with older versions of the less compiler.
* We also added a `strictUnits` option (`strictUnits: true` or `strict-units=on`) and this causes lessc to validate the units used are valid (e.g.`4px/2px = 2`, not `2px` and `4em/2px` throws an error). There are no longer any plans to switch this option on permanently, but some users will find it useful for bug finding.
* Unit maths is done, so `(4px * 3em) / 4px` used to equal `3px` and it now equals `3em`. However we do not cancel units down to unitless numbers unless strict units is on.
The selector interpolation, maths and units changes can be made to your less now and will compile fine with less 1.3.3.


## Variables

Variables allow you to specify widely used values in a single place, and then re-use them throughout the style sheet, making global changes as easy as changing one line of code.

This LESS:

```less
@color: #4D926F;

#header {
  color: @color;
}
h2 {
  color: @color;
}
```

Results in this CSS:

```css
#header {
  color: #4D926F;
}
h2 {
  color: #4D926F;
}
```

## Mixins

Mixins allow you to embed all the properties of a class into another class by simply including the class name as one of its properties. It's just like variables, but for whole classes. Mixins can also behave like functions, and take arguments, as seen in the example below.


```less
.rounded-corners (@radius: 5px) {
  -webkit-border-radius: @radius;
     -moz-border-radius: @radius;
      -ms-border-radius: @radius;
       -o-border-radius: @radius;
          border-radius: @radius;
}
#header {
  .rounded-corners;
}
#footer {
  .rounded-corners(10px);
}
```

```css
#header {
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
  border-radius: 5px;
}
#footer {
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  border-radius: 10px;
}
```

## Nested Rules

Rather than constructing long selector names to specify inheritance, in Less you can simply nest selectors inside other selectors. This makes inheritance clear and style sheets shorter.

```less
#header {
  h1 {
    font-size: 26px;
    font-weight: bold;
  }
  p { font-size: 12px;
    a { text-decoration: none;
      &:hover { border-width: 1px }
    }
  }
}
```

Results in:

```css
#header h1 {
  font-size: 26px;
  font-weight: bold;
}
#header p {
  font-size: 12px;
}
#header p a {
  text-decoration: none;
}
#header p a:hover {
  border-width: 1px;
}
```

## Functions & Operations

Are some elements in your style sheet proportional to other elements? Operations let you add, subtract, divide and multiply property values and colors, giving you the power to create complex relationships between properties. Operations should only be performed within parentheses in order to ensure compatibility with CSS. Functions map one-to-one with JavaScript code, allowing you to manipulate values however you want.

```less
@the-border: 1px;
@base-color: #111;
@red:        #842210;

#header {
  color: (@base-color * 3);
  border-left: @the-border;
  border-right: (@the-border * 2);
}
#footer {
  color: (@base-color + #003300);
  border-color: desaturate(@red, 10%);
}
```

```css
#header {
  color: #333;
  border-left: 1px;
  border-right: 2px;
}
#footer {
  color: #114411;
  border-color: #7d2717;
}
```