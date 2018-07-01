---
title: Variables
---

> Control commonly used values in a single location.

### Overview

It's not uncommon to see the same value repeated dozens _if not hundreds of times_ across your stylesheets:

```css
a,
.link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
```

Variables make your code easier to maintain by giving you a way to control those values from a single location:

```less
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  darken(@link-color, 10%);

// Usage
a,
.link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```

### Variable Interpolation

The examples above focused on using variables to control _values in CSS rules_, but they can also be used in other places as well, such as selector names, property names, URLs and `@import` statements.


#### Selectors

_v1.4.0_

```less
// Variables
@my-selector: banner;

// Usage
.@{my-selector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```
Compiles to:

```css
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

#### URLs

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}/white-sand.png");
}
```

#### Import Statements

_v1.4.0_

Syntax: `@import "@{themes}/tidal-wave.less";`

Note that before v2.0.0, only variables which have been declared in the root or current scope were considered and that only the current file and calling files were considered when looking for a variable.

Example:

```less
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

#### Properties

_v1.6.0_

```less
@property: color;

.widget {
  @{property}: #0ee;
  background-@{property}: #999;
}
```

Compiles to:

```css
.widget {
  color: #0ee;
  background-color: #999;
}
```

### Variable Variables

In Less, you can define a variable's name using another variable.

```less
@primary:  green;
@secondary: blue;

.section {
  @color: primary;
  
  .element {
    color: @@color;
  }
}
```

Which compiles to:

```less
.section .element {
  color: green;
}
```

<span class="anchor-target" id="variables-feature-lazy-loading"></span>
<!-- ^ please keep old anchor to not break zillion outer links -->
### Lazy Evaluation

> Variables do not have to be declared before being used.

Valid Less snippet:

```less
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;
```
this is valid Less too:

```less
.lazy-eval {
  width: @var;
  @a: 9%;
}

@var: @a;
@a: 100%;
```
both compile into:

```css
.lazy-eval {
  width: 9%;
}
```

When defining a variable twice, the last definition of the variable is used, searching from the current scope upwards. This is similar to css itself where the last property inside a definition is used to determine the value.

For instance:

```less
@var: 0;
.class {
  @var: 1;
  .brass {
    @var: 2;
    three: @var;
    @var: 3;
  }
  one: @var;
}
```
Compiles to:

```css
.class {
  one: 1;
}
.class .brass {
  three: 3;
}
```

Essentially, each scope has a "final" value, similar to properties in the browser, like this example using custom properties:
```css
.header {
  --color: white;
  color: var(--color);  // the color is black
  --color: black;
}
```
This means that, unlike other CSS pre-processing languages, Less variables behave very much like CSS's.


### Properties as Variables **(NEW!)**

_v3.0.0_

You can easily treat properties like variables using the `$prop` syntax. Sometimes this can
make your code a little lighter.

```less
.widget {
  color: #efefef;
  background-color: $color;
}
```

Compiles to:

```css
.widget {
  color: #efefef;
  background-color: #efefef;
}
```

Note that, like variables, Less will choose the last property within the current/parent scope
as being the "final" value.

```less
.block {
  color: red; 
  .inner {
    background-color: $color; 
  }
  color: blue;  
} 
```

Compiles to:
```css
.block {
  color: red; 
  color: blue;  
} 
.block .inner {
  background-color: blue; 
}
```

### Default Variables

We sometimes get requests for default variables - an ability to set a variable only if it is not already set. This feature is not required because you can easily override a variable by putting the definition afterwards.

For instance:

```less
// library
@base-color: green;
@dark-color: darken(@base-color, 10%);

// use of library
@import "library.less";
@base-color: red;
```

This works fine because of [Lazy Loading](#variables-feature-lazy-loading) - `@base-color` is overridden and `@dark-color` is a dark red.
