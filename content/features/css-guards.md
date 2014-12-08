> "if"'s around selectors and properties

Released [v1.5.0]({{ less.master }}CHANGELOG.md)

Guards can also be applied to css selectors, which is syntactic sugar for declaring the mixin and then calling it immediately.

For instance, before 1.5.0 you would have had to do this:

```less
.my-optional-style() when (@my-option = true) {
  button {
    color: white;
  }
}
.my-optional-style();
```

Now, you can apply the guard directly to a style.

```less
button when (@my-option = true) {
  color: white;
}
```

You can also achieve an `if` type statement by combining this with the `&` feature, allowing you to group multiple guards. 
```less
& when (@my-option = true) {
  button {
    color: white;
  }
  a {
    color: blue;
  }
}
```

The `&` feature can be applied on only properties inside a mixin or selector.
```
& when (@my-option = true) {
  border: 1px solid black;
}
```

Example of a mixin that sets a border for a certain width.
```
.width(@width) {
  width: @width;
  & when (@width < 600px) {
    border: 1px solid black;
  }
}
```
