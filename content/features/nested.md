<a id="nested-rules" class="section_anchor"></a>

#Nested Rules

LESS allows you to use nesting as well as normal CSS cascading. For example, you can produce the following CSS:

```css
#header {
  color: black;
}
#header .navigation {
  font-size:12px;
}
#header .logo {
  width: 300px;
}
#header .logo:hover {
  text-decoration: none;
}
```

With the following LESS:

```less
#header {
  color: black;

  .navigation {
    font-size: 12px;
  }

  .logo {
    width: 300px;

    &:hover {
      text-decoration: none;
    }
  }
}
```

This syntax is a better representation of the DOM structure that you are styling. Note that by default
the nested style produces output with the descendent syntax of CSS. To produce other relationships, you can use `&`.
The `&` acts as a placeholder for the parent selector (where the parent selector includes the components of all ancestor selectors).

For example:

```less
.bordered {
  &.float {
    float: left;
  }
  .top {
    margin: 5px;
    &:hover {
      background-color: #ffdddd;
    }
  }
}
```

Will output

```css
.bordered.float {
  float: left;
}
.bordered .top {
  margin: 5px;
}
.bordered .top:hover {
  background-color: #ffdddd;
}
```

##Nested Media Queries

Media queries can be nested in the same way as selectors, and output will create the appropriate rules within
media queries.

For example:

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

##Advanced Usage of &

The `&` combinator can be used to multiply classes, and can be used with comma seperated selectors.
You can also use the `&` to prepend a selector to the inherited (parent) scope. [Parent selector](Parent-Selectors.md) describes this in more detail.

For example:

```less
.child, .sibling {
  & + & {
    color: red;
  }
  &.adopted {
    color: blue;
  }
  .parent & {
    color: black;
  }
}
```

Will output
```css
.child + .child,
.child + .sibling,
.sibling + .child,
.sibling + .sibling {
  color: red;
}
.child.adopted,
.sibling.adopted {
  color: blue;
}
.parent .child,
.parent .sibling {
  color: black;
}
```

You can also use `&` to produce class names.

For Example:

```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &&-custom {
    background-image: url("button.png");
  }
}
```

Will output

```css
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button.button-custom {
  background-image: url("button.png");
}
```

The `&` combinator can also be used with mixins. In the case of mixins, `&` refers to the selector for the scope that is mixing in the other class.

For example:
```less
.mixin {
  &:hover {
    color:cyan;
  }
}
.blue {
  .mixin;
  color:blue;
}

```

Will output

```css
.mixin:hover {
  color: cyan;
}

.blue {
  color: blue;
}
.blue:hover {
  color: cyan;
}
```
