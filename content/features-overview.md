---
title: Features Overview
---

> As an extension to CSS, LESS is not only backwards compatible with CSS, but the extra features it adds use existing CSS syntax. This makes learning LESS a breeze, and if in doubt, lets you fall back to vanilla CSS.


### Variables

These are pretty self-explanatory:

```less
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
  color: @light-blue;
}
```

Outputs:

```css
#header {
  color: #6c94be;
}
```

Note that variables are actually "constants" in that they can only be defined once.


### Mixins

Mixins are a way of including ("mixing in") a bunch of properties from one rule-set into another rule-set. So say we have the following class:

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

And we want to use these properties inside other rule-sets. Well, we just have to drop in the name of the class where we want the properties, like so:

```less
#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```

The properties of the `.bordered` class will now appear in both `#menu a` and `.post a`. (Note that you can also use `#ids` as mixins.)

**Learn more**

* [More about mixins](features/#mixins)
* [Parametric Mixins](features/#parametric-mixins)


### Nested rules

LESS gives you the ability to use nesting instead of, or in combination with cascading. Let's say we have the following CSS:

```css
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

In LESS, we can also write it this way:

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

The resulting code is more concise, and mimics the structure of your HTML.

You can also bundle pseudo-selectors with your mixins using this method. Here's the classic clearfix hack, rewritten as a mixin (`&` represents the current selector parent):

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

### Operations

Any number, color or variable can be operated on. Here are a couple of examples:

```less
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

color: #888 / 4;
background-color: @base-color + #111;
height: 100% / 2 + @filler;
```

The output is pretty much what you expect—LESS understands the difference between colors and units. If a unit is used in an operation, like in:

```less
@var: 1px + 5;
```

LESS will use that unit for the final output—`6px` in this case.

### Functions

LESS provides a variety of functions which transform colors, manipulate strings and do maths. They are documented fully in the function reference.

Using them is pretty straightforward. The following example uses percentage to convert 0.5 to 50%, increases the saturation of a base color by 5% and then sets the background color to one that is lightened by 25% and spun by 8 degrees:

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(0.5); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```


### Namespaces & Accessors

(Not to be confused with [CSS `@namespace`](http://www.w3.org/TR/css3-namespace/)).
Sometimes, you may want to group your variables or mixins, for organizational purposes, or just to offer some encapsulation. You can do this pretty intuitively in LESS, say you want to bundle some mixins and variables under `#bundle`, for later reuse or distributing:

```less
#bundle {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white
    }
  }
  .tab { ... }
  .citation { ... }
}
```

Now if we want to mixin the `.button` class in our `#header a`, we can do:

```less
#header a {
  color: orange;
  #bundle > .button;
}
```


### Scope

Scope in LESS is very similar to that of programming languages. Variables and mixins are first looked for locally, and if they aren't found, the compiler will look in the parent scope, and so on.

Note that the order of declaration **does** matter.

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```


### Comments

Both block-style and inline comments may be used:

```less
/* One hell of a block
style comment! */
@var: red;

// Get in line!
@var: white;
```

### Importing

Importing works pretty much as expected. You can import a `.less` file, and all the variables in it will be available. If the file is a `.less`, the extension is optional:

```css
@import "library";
@import "typo.css";
```