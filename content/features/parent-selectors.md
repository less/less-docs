> Referencing parent selectors with `&`

The `&` operator represents the parent selectors of a [nested rule](#features-overview-feature-nested-rules) and is most commonly used when applying a modifying class or pseudo-class to an existing selector:

```less
a {
  color: blue;
  &:hover {
    color: green;
  }
}
```

results in:

```css
a {
  color: blue;
}

a:hover {
  color: green;
}
```

Notice that without the `&`, the above example would result in `a :hover` rule (a descendant selector that matches hovered elements inside of `<a>` tags) and this is not what we typically would want with the nested `:hover`.

The "parent selectors" operator has a variety of uses. Basically any time you need the selectors of the nested rules to be combined in other ways than the default. For example another typical use of the `&` is to produce repetitive class names:

```less
.button {
  &-ok {
    background-image: url("ok.png");
  }
  &-cancel {
    background-image: url("cancel.png");
  }

  &-custom {
    background-image: url("custom.png");
  }
}
```

output:

```css
.button-ok {
  background-image: url("ok.png");
}
.button-cancel {
  background-image: url("cancel.png");
}
.button-custom {
  background-image: url("custom.png");
}
```

### Multiple `&`

`&` may appear more than once within a selector. This makes it possible to repeatedly refer to a parent selector without repeating its name.

```less
.link {
  & + & {
    color: red;
  }

  & & {
    color: green;
  }

  && {
    color: blue;
  }

  &, &ish {
    color: cyan;
  }
}
```

will output:

```css
.link + .link {
  color: red;
}
.link .link {
  color: green;
}
.link.link {
  color: blue;
}
.link, .linkish {
  color: cyan;
}
```


Note that `&` represents all parent selectors (not just the nearest ancestor) so the following example:

```less
.grand {
  .parent {
    & > & {
      color: red;
    }

    & & {
      color: green;
    }

    && {
      color: blue;
    }

    &, &ish {
      color: cyan;
    }
  }
}
```

results in:

```css
.grand .parent > .grand .parent {
  color: red;
}
.grand .parent .grand .parent {
  color: green;
}
.grand .parent.grand .parent {
  color: blue;
}
.grand .parent,
.grand .parentish {
  color: cyan;
}
```


### Changing Selector Order

It can be useful to prepend a selector to the inherited (parent) selectors.  This can be done by putting the `&` after current selector.
For example, when using Modernizr, you might want to specify different rules based on supported features:

```less
.header {
  .menu {
    border-radius: 5px;
    .no-borderradius & {
      background-image: url('images/button-background.png');
    }
  }
}
```

The selector `.no-borderradius &` will prepend `.no-borderradius` to its parent `.header .menu` to form the`.no-borderradius .header .menu` on output:

```css
.header .menu {
  border-radius: 5px;
}
.no-borderradius .header .menu {
  background-image: url('images/button-background.png');
}
```


### Combinatorial Explosion

`&` can also be used to generate every possible permutation of selectors in a comma separated list:

```less
p, a, ul, li {
  border-top: 2px dotted #366;
  & + & {
    border-top: 0;
  }
}
```

This expands to all possible (16) combinations of the specified elements:

```css
p,
a,
ul,
li {
  border-top: 2px dotted #366;
}
p + p,
p + a,
p + ul,
p + li,
a + p,
a + a,
a + ul,
a + li,
ul + p,
ul + a,
ul + ul,
ul + li,
li + p,
li + a,
li + ul,
li + li {
  border-top: 0;
}
```
