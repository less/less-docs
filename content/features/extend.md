# Extend

> Extend is a LESS Pseudo-Class which merges the selector it is put on with ones that match what it references.

Released [v1.4.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

## Overview

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
```
In the rule set above, the `:extend` selector will apply the "extending selector" (`nav ul`) onto the `.inline` class _wherever the `.inline` class appears_. The declaration block will be kept as-is, but without any reference to the extend (because extend isn't css).

So the following:

```less
nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}
```
Outputs
```css
nav ul {
  background: blue;
}
.inline,
nav ul {
  color: red;
}
```

Notice how the `nav ul:extend(.inline)` selector gets output as `nav ul` - the extend gets removed before output and the selector block left as-is. If no properties are put in that block then it gets removed from the output (but the extend still may affect other selectors).

## Syntax Overview
The extend is either attached to a selector or placed into a ruleset. It looks like a pseudoclass with selector parameter optionally followed by the keyword `all`:

Example:

```less
.a:extend(.b) {
}
// the above block does the same thing as the below block
.a {
  &:extend(.b);
}
```

```less
.c:extend(.d all) {
  // extends all instances of ".d" e.g. ".x.d" or ".d.x"
}
.c:extend(.d) {
  // extends only instances where the selector will be output as just ".d"
}
```

It can contain one more classes to extend, seperated by commas.

Example:

```less
.e:extend(.f) {
}
.e:extend(.g) {
}
// the above an the below do the same thing
.e:extend(.f, .g) {
}
```

### Attached to Selector
Extend attached to a selector looks like an ordinary pseudoclass with selector as a parameter. A selector can contain multiple extend clauses, but all extends must be at the end of the selector.

* Extend after the selector: `pre:hover:extend(div pre)`.
* Space between selector and extend is allowed: `pre:hover :extend(div pre)`.
* Multiple extends are allowed: `pre:hover:extend(div pre):extend(.bucket tr)` - Note this is the same as `pre:hover:extend(div pre, .bucket tr)`
* This is NOT allowed: `pre:hover:extend(div pre).nth-child(odd)`. Extend must be last.

If a ruleset contains multiple selectors, any of them can have the extend keyword. Multiple selectors with extend in one ruleset:
```
.big-bucket:extend(.bucket), .big-bag:extend(.bag), .big-division {
  // body
}
```

### Inside Ruleset
Extend can be placed into rulesets body using `&:extend(selector)` syntax. Placing extend into a body is a shortcut for placing it into every single selector of that ruleset.


Extend inside a body:
```
pre:hover, .some-class {
  &:extend(div pre);
}
```

is exactly the same as adding an extend after each selector:
```
pre:hover:extend(div pre), .some-class:extend(div pre) {
}
```

### Nested Selectors
Extend is able to match nested selectors. Following less:

Example:

```
.bucket {
  tr { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(.bucket tr) { } // nested ruleset is recognized
```
Outputs
```
.bucket tr, .some-class {
  color: blue;
}
```

Essentially the extend looks at the compiled css, not the original less.

Example:

```
.bucket {
  tr & { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(tr .bucket) { } // nested ruleset is recognized
```
Outputs
```
tr .bucket, .some-class {
  color: blue;
}
```


### Exact Matching
Extend by default looks for exact match between selectors. It does matter whether selector uses leading start or not. It does not matter that two nth-expressions have the same meaning, they need to have to same form in order to be matched. The only exception are quotes in attribute selector, less knows they have the same meaning and matches them.

Example:

```
.a.class,
.class.a,
.class > .a {
  color: blue;
}
.test:extend(.class) {} // this will NOT match the any selectors above
```

Leading star does matter. Selectors `*.class` and `.class` are equivalent, but extend will not match them:
```
*.class {
  color: blue;
}
.noStar:extend(.class) {} // this will NOT match the *.class selector
```
Outputs
```
*.class {
  color: blue;
}
```

Order of pseudoclasses does matter. Selectors `link:hover:visited` and `link:visited:hover` match the same set of elements, but extend treats them as different:
```
link:hover:visited {
  color: blue;
}
.selector:extend(link:visited:hover) {}
```
Outputs
```
link:hover:visited {
  color: blue;
}
```

Nth expression form does matter. Nth-expressions `1n+3` and `n+3` are equivalent, but extend will not match them:
```
:nth-child(1n+3) {
  color: blue;
}
.child:extend(n+3) {} //
```
Outputs
```
:nth-child(1n+3) {
  color: blue;
}
```

Quote type in attribute selector does not matter, all are equivalent.

Example:

```
[title=identifier] {
  color: blue;
}
[title='identifier'] {
  color: blue;
}
[title="identifier"] {
  color: blue;
}
.noQuote:extend([title=identifier]) {}
.singleQuote:extend([title='identifier']) {}
.doubleQuote:extend([title="identifier"]) {}
```
Outputs
```
[title=identifier], .noQuote, .singleQuote, .doubleQuote {
  color: blue;
}
[title='identifier'], .noQuote, .singleQuote, .doubleQuote {
  color: blue;
}
[title="identifier"], .noQuote, .singleQuote, .doubleQuote {
  color: blue;
}
```

## Extend All

When you specify the all keyword last in an extend argument it tells less to match that selector as part of another selector. The selector will be copied and the matched part of the selector only will then be replaced with the extend, making a new selector.

Example:

```less
.a.b.test,
.test.c {
  color: orange;
}
.test {
  &:hover {
    color: green;
  }
}

.replacement :extend(.test all) {
}

```
Outputs
```css
.a.b.test,
.test.c,
.a.b.replacement,
.replacement.c {
  color: orange;
}
.test:hover,
.replacement:hover {
  color: green;
}
```

You can think of this mode of operation as essentially doing a non-destructive search and replace.

### Selector Interpolation
Extend is NOT able to match selectors with variables. If selector contains variable, extend will ignore it. There is a pending feature request for this but it is not an easy change.
However, extend can be attached to interpolated selector.

Selector with variable will not be matched:
```
@variable: .bucket;
@{variable} { // interpolated selector
  color: blue;
}
.some-class:extend(.bucket) { } // does nothing, match is not found
```

and extend with variable in target selector matches nothing:
```
.bucket {
  color: blue;
}
.some-class:extend(@{variable}) { } // interpolated selector matches nothing
@variable: .bucket;
```

Two previous examples compile into:
```
.bucket {
  color: blue;
}
```

Extend attached to interpolated selector works:
```
.bucket {
  color: blue;
}
@{variable}:extend(.bucket) { }
@variable: .selector;
```

previous less compiles into:
```
.bucket, .selector {
  color: blue;
}
```

## Scoping / Extend Inside Media

Extend written inside media declaration should matches only selectors inside that media declaration:
```
@media print {
  .screenClass:extend(.selector) {} // extend inside media
  .selector { // this will be matched - it is in the same media
    color: black;
  }
}
.selector { // ruleset on top of style sheet - extend ignores it
  color: red;
}
@media screen {
  .selector {  // ruleset inside another media - extend ignores it
    color: blue;
  }
}
```

compiles into:
```
@media print {
  .selector, .screenClass { // ruleset inside the same media was extended
    color: black;
  }
}
.selector { // ruleset on top of style sheet was ignored
  color: red;
}
@media screen {
  .selector { // ruleset inside another media was ignored
    color: blue;
  }
}
```

Extend written inside media declaration does not match selectors inside nested declaration:
```
@media screen {
  .screenClass:extend(.selector) {} // extend inside media
  @media (min-width: 1023px) {
    .selector {  // ruleset inside nested media - extend ignores it
      color: blue;
    }
  }
}
```

compiles into:
```
@media screen and (min-width: 1023px) {
  .selector { // ruleset inside another nested media was ignored
    color: blue;
  }
}
```

Top level extend matches everything including selectors inside nested media:
```
@media screen {
  .selector {  // ruleset inside nested media - top level extend works
    color: blue;
  }
  @media (min-width: 1023px) {
    .selector {  // ruleset inside nested media - top level extend works
      color: blue;
    }
  }
}

.topLevel:extend(.selector) {} // top level extend matches everything
```

compiles into:
```
@media screen {
  .selector, .topLevel { // ruleset inside media was extended
    color: blue;
  }
}
@media screen and (min-width: 1023px) {
  .selector, .topLevel { // ruleset inside nested media was extended
    color: blue;
  }
}
```

### Duplication Detection

There is not currently any duplication detection.

Example:

```css
.alert-info, .widget {
  // declarations
}

.alert:extend(.alert-info, .widget) {
}
```
Outputs
```css
.alert, .widget, .alert, .alert-info {
  // declarations
}
```

## Use Cases

TODO - upto here in documenting

> Examples for when "extend" will be valuable, and when it won't

The purpose of this section is to better understand how the ```:extend``` feature _ought_ be used, thinking in terms of best practices, in order to help prioritize development decisions, and to qualify or disqualify feature requests related to this feature.


### Repetitious Code

TODO:

The `:extend` feature seems to hold the most promise as a device for:

1. Selector Inheritance: which means you can add the styles of one selector to other selectors, but without having to manually _hunt down and directly edit_ each of the selectors you wish to extend. Clearly, this is advantageous at the time of need, but it's also helpful with code maintenance.
2.

`:extend` directive to a selector (or ruleset of a selector) allows you to add the styles of that selector to any other selectors,

```css
.widget {
  &:extend(ul li, .blob, .kitchensink, .sanity, .willtolive, .questions, .etc);
  background: blue;
}
```


```css
.widget {
  &:extend(.answers, .blob, .kitchensink, .sanity, .willtolive, .nav, .navbar, .etc);
  background: blue;
}
```


Don't understand:
Notice that the Extending selector was grouped before the Extended selector. This was chosen not for stylistic reasons, but to be behaviorally consistent with the expected order of inherited declarations within the block.

TODOs:
Specificity
Order of Inherited Declarations
Mixins <-- just do later?

Selectors
  Type Selectors
  Simple Selectors
Combinators
Pseudo-Elements


## Extends with Mixins

TODO: that it is planned

```
.clearfix():extend() {
  // declarations
}
```

#Extends, Mixins, "Empty" Mixins, and Placeholders

TODO
We want :extend to make our lives easier by DRYing up our stylesheets, but only when :extend cannot "pierce the context barrier" of the selector you wish to extend. So within the same context the goal is to prevent  order to prevent :extend from poluting styles
