> Control commonly used values in a single location.

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
@link-color-hover:  (@link-color, 10%);

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

## Variable Interpolation

The examples above focused on using variables to control _values in CSS rules_, but they can also be used in other places as well, such as selector names, property names, URLs and `@import` statements.


### Selectors

Version: 1.4.0

```less
// Variables
@mySelector: banner;

// Usage
.@{mySelector} {
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

### URLs

```less
// Variables
@images: "../img";

// Usage
body {
  color: #444;
  background: url("@{images}}/white-sand.png");
}
```

### Import statements

Version: 1.4.0

Syntax: `@import "@{themes}/tidal-wave.less";`

Note that currently, only variables which have been declared in the root or current scope will be considered and that only the current file and calling files will be considered when looking for a variable.
This means that this usage is typically limited to when you an inject a variable into the compile process or define a variable at the beginning of your root file.

When you are importing a css file and not using the inline option (e.g. the import statement will be kept intact) then the above does not apply.

Example:

```less
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

### Properties

Version: 1.6.0

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

## Variable Names

It is also possible to define variables with a variable name:

```less
@fnord:  "I am fnord.";
@var:    "fnord";
content: @@var;
```

Which compiles to:

```
content: "I am fnord.";
```

## Lazy Loading

> Variables are lazy loaded and do not have to be declared before being used.

Valid LESS snippet:

```less
.lazy-eval {
  width: @var;
}

@var: @a;
@a: 9%;
```
this is valid LESS too:

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

## default variables

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

This works fine - base-color is overidden and dark-color is a dark red.
