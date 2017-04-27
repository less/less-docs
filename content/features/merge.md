> Combine properties

The `merge` feature allows for aggregating values from multiple properties into a comma or space separated list under a single property. `merge` is useful for properties such as background and transform.

### Comma

> Append property value with comma

Released [v1.5.0]({{ less.master.url }}CHANGELOG.md)

Example:

```less
.mixin() {
  box-shadow+: inset 0 0 10px #555;
}
.myclass {
  .mixin();
  box-shadow+: 0 0 20px black;
}
```
Outputs

```css
.myclass {
  box-shadow: inset 0 0 10px #555, 0 0 20px black;
}
```

### Space

> Append property value with space

Released [v1.7.0]({{ less.master.url }}CHANGELOG.md)

Example:

```less
.mixin() {
  transform+_: scale(2);
}
.myclass {
  .mixin();
  transform+_: rotate(15deg);
}
```
Outputs

```css
.myclass {
  transform: scale(2) rotate(15deg);
}
```

To avoid any unintentional joins, `merge` requires an explicit `+` or `+_` flag on each join pending declaration.