> Extend is a Less pseudo-class which merges the selector it is put on with ones that match what it references.

Released [v1.4.0]({{ less.master.url }}CHANGELOG.md)

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

### Extend Syntax
The extend is either attached to a selector or placed into a ruleset. It looks like a pseudo-class with selector parameter optionally followed by the keyword `all`:

Example:

```less
.a:extend(.b) {}

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

It can contain one or more classes to extend, separated by commas.

Example:

```less
.e:extend(.f) {}
.e:extend(.g) {}

// the above and the below do the same thing
.e:extend(.f, .g) {}
```

### Extend Attached to Selector
Extend attached to a selector looks like an ordinary pseudo-class with selector as a parameter. A selector can contain multiple extend clauses, but all extends must be at the end of the selector.

* Extend after the selector: `pre:hover:extend(div pre)`.
* Space between selector and extend is allowed: `pre:hover :extend(div pre)`.
* Multiple extends are allowed: `pre:hover:extend(div pre):extend(.bucket tr)` - Note this is the same as `pre:hover:extend(div pre, .bucket tr)`
* This is NOT allowed: `pre:hover:extend(div pre).nth-child(odd)`. Extend must be last.

If a ruleset contains multiple selectors, any of them can have the extend keyword. Multiple selectors with extend in one ruleset:

```less
.big-division,
.big-bag:extend(.bag),
.big-bucket:extend(.bucket) {
  // body
}
```

### Extend Inside Ruleset
Extend can be placed into a ruleset's body using `&:extend(selector)` syntax. Placing extend into a body is a shortcut for placing it into every single selector of that ruleset.


Extend inside a body:

```less
pre:hover,
.some-class {
  &:extend(div pre);
}
```

is exactly the same as adding an extend after each selector:

```less
pre:hover:extend(div pre),
.some-class:extend(div pre) {}
```

### Extending Nested Selectors
Extend is able to match nested selectors. Following less:

Example:

```less
.bucket {
  tr { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(.bucket tr) {} // nested ruleset is recognized
```
Outputs

```css
.bucket tr,
.some-class {
  color: blue;
}
```

Essentially the extend looks at the compiled css, not the original less.

Example:

```less
.bucket {
  tr & { // nested ruleset with target selector
    color: blue;
  }
}
.some-class:extend(tr .bucket) {} // nested ruleset is recognized
```

Outputs

```css
tr .bucket,
.some-class {
  color: blue;
}
```


### Exact Matching with Extend
Extend by default looks for exact match between selectors. It does matter whether selector uses leading star or not. It does not matter that two nth-expressions have the same meaning, they need to have to same form in order to be matched. The only exception are quotes in attribute selector, less knows they have the same meaning and matches them.

Example:

```less
.a.class,
.class.a,
.class > .a {
  color: blue;
}
.test:extend(.class) {} // this will NOT match the any selectors above
```

Leading star does matter. Selectors `*.class` and `.class` are equivalent, but extend will not match them:

```less
*.class {
  color: blue;
}
.noStar:extend(.class) {} // this will NOT match the *.class selector
```

Outputs

```css
*.class {
  color: blue;
}
```

Order of pseudo-classes does matter. Selectors `link:hover:visited` and `link:visited:hover` match the same set of elements, but extend treats them as different:

```less
link:hover:visited {
  color: blue;
}
.selector:extend(link:visited:hover) {}
```
Outputs

```css
link:hover:visited {
  color: blue;
}
```

### nth Expression

Nth expression form does matter. Nth-expressions `1n+3` and `n+3` are equivalent, but extend will not match them:

```less
:nth-child(1n+3) {
  color: blue;
}
.child:extend(:nth-child(n+3)) {}
```
Outputs

```css
:nth-child(1n+3) {
  color: blue;
}
```

Quote type in attribute selector does not matter. All of the following are equivalent.

```less
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

```css
[title=identifier],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}

[title='identifier'],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}

[title="identifier"],
.noQuote,
.singleQuote,
.doubleQuote {
  color: blue;
}
```

### Extend "all"

When you specify the all keyword last in an extend argument it tells Less to match that selector as part of another selector. The selector will be copied and the matched part of the selector only will then be replaced with the extend, making a new selector.

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

.replacement:extend(.test all) {}
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

_You can think of this mode of operation as essentially doing a non-destructive search and replace._


### Selector Interpolation with Extend
> Extend is **not** able to match selectors with variables. If selector contains variable, extend will ignore it.

However, extend can be attached to interpolated selector.

Selector with variable will not be matched:

```less
@variable: .bucket;
@{variable} { // interpolated selector
  color: blue;
}
.some-class:extend(.bucket) {} // does nothing, no match is found
```

and extend with variable in target selector matches nothing:

```less
.bucket {
  color: blue;
}
.some-class:extend(@{variable}) {} // interpolated selector matches nothing
@variable: .bucket;
```

Both of the above examples compile into:

```less
.bucket {
  color: blue;
}
```

However, `:extend` attached to an interpolated selector works:

```less
.bucket {
  color: blue;
}
@{variable}:extend(.bucket) {}
@variable: .selector;
```

compiles to:

```less
.bucket, .selector {
  color: blue;
}
```

### Scoping / Extend Inside @media

Currently, an `:extend` inside a `@media` declaration will only match selectors inside the same media declaration:

```less
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

```css
@media print {
  .selector,
  .screenClass { /*  ruleset inside the same media was extended */
    color: black;
  }
}
.selector { /* ruleset on top of style sheet was ignored */
  color: red;
}
@media screen {
  .selector { /* ruleset inside another media was ignored */
    color: blue;
  }
}
```

Note: extending does not match selectors inside a nested `@media` declaration:

```less
@media screen {
  .screenClass:extend(.selector) {} // extend inside media
  @media (min-width: 1023px) {
    .selector {  // ruleset inside nested media - extend ignores it
      color: blue;
    }
  }
}
```

This compiles into:

```css
@media screen and (min-width: 1023px) {
  .selector { /* ruleset inside another nested media was ignored */
    color: blue;
  }
}
```

Top level extend matches everything including selectors inside nested media:

```less
@media screen {
  .selector {  /* ruleset inside nested media - top level extend works */
    color: blue;
  }
  @media (min-width: 1023px) {
    .selector {  /* ruleset inside nested media - top level extend works */
      color: blue;
    }
  }
}

.topLevel:extend(.selector) {} /* top level extend matches everything */
```

compiles into:

```css
@media screen {
  .selector,
  .topLevel { /* ruleset inside media was extended */
    color: blue;
  }
}
@media screen and (min-width: 1023px) {
  .selector,
  .topLevel { /* ruleset inside nested media was extended */
    color: blue;
  }
}
```

### Duplication Detection

Currently there is no duplication detection.

Example:

```less
.alert-info,
.widget {
  /* declarations */
}

.alert:extend(.alert-info, .widget) {}
```
Outputs

```css
.alert-info,
.widget,
.alert,
.alert {
  /* declarations */
}
```

### Use Cases for Extend

#### Classic Use Case

The classic use case is to avoid adding a base class. For example, if you have

```css
.animal {
  background-color: black;
  color: white;
}
```

and you want to have a subtype of animal which overrides the background color then you have two options, firstly change your HTML

```html
<a class="animal bear">Bear</a>
```
```css
.animal {
  background-color: black;
  color: white;
}
.bear {
  background-color: brown;
}
```

or have simplified html and use extend in your less. e.g.

```html
<a class="bear">Bear</a>
```

```less
.animal {
  background-color: black;
  color: white;
}
.bear {
  &:extend(.animal);
  background-color: brown;
}
```

#### Reducing CSS Size

Mixins copy all of the properties into a selector, which can lead to unnecessary duplication. Therefore you can use extends instead of mixins to move the selector up to the properties you wish to use, which leads to less CSS being generated.

Example - with mixin:

```less
.my-inline-block() {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  .my-inline-block;
}
.thing2 {
  .my-inline-block;
}
```

Outputs

```css
.thing1 {
  display: inline-block;
  font-size: 0;
}
.thing2 {
  display: inline-block;
  font-size: 0;
}
```

Example (with extends):

```less
.my-inline-block {
  display: inline-block;
  font-size: 0;
}
.thing1 {
  &:extend(.my-inline-block);
}
.thing2 {
  &:extend(.my-inline-block);
}
```

Outputs

```css
.my-inline-block,
.thing1,
.thing2 {
  display: inline-block;
  font-size: 0;
}
```

#### Combining Styles / A More Advanced Mixin

Another use-case is as an alternative for a mixin - because mixins can only be used with simple selectors, if you have two different blocks of html, but need to apply the same styles to both you can use extends to relate two areas.

Example:

```less
li.list > a {
  // list styles
}
button.list-style {
  &:extend(li.list > a); // use the same list styles
}
```
