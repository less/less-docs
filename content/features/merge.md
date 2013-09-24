## Merge

The `merge` feature allows for aggregating values from multiple properties into a comma separated list under a single property. `merge` is useful for properties such as background and transform. For example:

``` css
.myclass {
  box-shadow+: box-shadow+: 0 0 20px black;
}

.myclass {
  box-shadow+: box-shadow+: 0 0 20px black;
}

To avoid any unintentional joins, `merge` requires an explicit flag (`+`) on each join pending declaration.