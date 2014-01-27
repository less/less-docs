> "if"'s around selectors

Guards can also be applied to css selectors, which is syntactic sugar for declaring the mixin and then calling it immediately.

For instance, before 1.5.0 you would have had to do this.

```less
.my-optional-style() when (@my-option = true) {
  button {
    color: white;
  }
}
.my-optional-style();
```

you can now write the guard straight on to styles

```less
button when (@my-option = true) {
  color: white;
}
```

You can also achieve an 'if' type statement by combining this with the `&` feature, allowing you to group multiple guards. 
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
