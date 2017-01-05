> Less allows you to use nesting as well as normal cascading CSS.

...

### Nested media queries

Media queries can be nested in the same way as selectors, and output will create the appropriate rules within media queries.

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

Will output:

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

...

### `&` and mixins

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
