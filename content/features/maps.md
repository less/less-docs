Released [v3.5.0]({{ less.master.url }}CHANGELOG.md)

> Use rulesets and mixins as maps of values

By combining namespacing with the lookup `[]` syntax, you can turn your rulesets / mixins into maps.

```less
@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
}

.navbar {
  display: block;

  @media (min-width: @sizes[tablet]) {
    display: inline-block;
  }
}
```
Outputs:
```css
.navbar {
  display: block;
}
@media (min-width: 768px) {
  .navbar {
    display: inline-block;
  }
}
```

Mixins are a little more versatile as maps because of namespacing and the ability to overload mixins.

```less
#library() {
  .colors() {
    primary: green;
    secondary: blue;
  }
}

#library() {
  .colors() { primary: grey; }
}

.button {
  color: #library.colors[primary];
  border-color: #library.colors[secondary];
}
```
Outputs:
```css
.button {
  color: grey;
  border-color: blue;
}
```

You can also make this easier by [aliasing mixins](#mixins-feature-mixin-aliasing-feature).  That is:

```less
.button {
  @colors: #library.colors();
  color: @colors[primary];
  border-color: @colors[secondary];
}
```

Note, if a lookup value produces another ruleset, you can append a second `[]` lookup, as in:

```less
@config: {
  @options: {
    library-on: true
  }
}

& when (@config[@options][library-on] = true) {
  .produce-ruleset {
    prop: val;
  }
}
```

In this way, rulesets and variable calls can emulate a type of "namespacing", similar to mixins.

As far as whether to use mixins or rulesets assigned to variables as maps, it's up to you. You may want to replace entire maps by re-declaring a variable assigned to a rulset. Or you may want to "merge" individual key/value pairs, in which case mixins as maps might be more appropriate.

### Using variable variables in lookups

One important thing to notice is that the value in `[@lookup]` is the key (variable) name `@lookup`, and is not evaluated as a variable. If you want the key name itself to be variable, you can use the `@@variable` syntax.

E.g.
```less
.foods() {
  @dessert: ice cream;
}

@key-to-lookup: dessert;

.lunch {
  treat: .foods[@@key-to-lookup];
}
```
This would output:
```css
.lunch {
  treat: ice cream;
}
```