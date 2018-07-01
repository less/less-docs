Released [v3.5.0-beta.4]({{ less.master.url }}CHANGELOG.md)

> Use rulesets and mixins as de facto maps of values

By combining namespacing with the lookup `[]` syntax, you can turn your rulesets / mixins into maps.

```less
@sizes: {
  mobile: 320px;
  tablet: 768px;
  desktop: 1024px;
};

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