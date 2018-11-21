> "if"'s around selectors

Released [v1.5.0]({{ less.master.url }}CHANGELOG.md)

Like Mixin Guards, guards can also be applied to css selectors, which is syntactic sugar for declaring the mixin and then calling it immediately.

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
Note that you can also achieve a similar pattern by using the actual `if()` function and a variable call. As in:
```less
@dr: if(@my-option = true, {
  button {
    color: white;
  }
  a {
    color: blue;
  }
});
@dr();
```