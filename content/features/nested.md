##Nested Rules

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

###Advanced Usage of &

You can use the `&` to prepend a selector to the inherited (parent) scope. [Parent selector](Parent-Selectors.md) describes this in more detail.

The `&` combinator can also be used to multiply classes, and can be used with comma seperated selectors.

For example:

```less
.child, .sibling {
  .parent & {
    color: black;
  }
  & + & {
    color: red;
  }
  &.adopted {
    color: blue;
  }
}
```

Will Output:
```css
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
.child.adopted,
.sibling.adopted {
  color: blue;
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

Will Output:

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
