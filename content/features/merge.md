# Merge
> Combine properties

The `merge` feature allows for aggregating values from multiple properties into a comma separated list under a single property. `merge` is useful for properties such as background and transform.

Released [v1.5.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

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

To avoid any unintentional joins, `merge` requires an explicit `+` flag on each join pending declaration.

_Note: although convention on the transform property is to have space separated, comma separation is supported which is why there is no option on this feature for whether to generate space or comma separated._