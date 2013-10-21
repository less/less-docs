## Merge

The `merge` feature allows for aggregating values from multiple properties into a comma separated list under a single property. `merge` is useful for properties such as background and transform.

Example:
```less
.myclass {
  box-shadow+: 0 0 12px black;
  box-shadow+: 0 0 20px gray;
}
```

Output:
```css
.myclass {
  box-shadow: 0 0 12px black, 0 0 20px gray;
}
```

To avoid any unintentional joins, `merge` requires an explicit `+` flag on each join pending declaration.
