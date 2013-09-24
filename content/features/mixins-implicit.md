## Pseudo-Class Selectors

In LESS 1.x, you could define a common button style, including `:hover` and `:focus` behaviours, in a mixin like this:

```css
.common-button-styles() {
  color: #fff;
  &:hover {
    color: #eee;
  }
}
```

And this would output as expected.  It would style the button it's used on (as opposed to its children).

To continue the above example (in LESS 1.x):

```css
button {
  .common-button-styles();
}
```

The result is:

```css
button {
  color: #fff;
}
button:hover {
  color: #eee;
}
```


**In LESS 2** (LESS.js) you can achieve the same thing by using `&:hover` instead.