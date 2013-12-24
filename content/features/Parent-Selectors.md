# Parent Selectors

> Changing selector order

When using **Nested rules**, it can be very useful to prepend a selector to the inherited (parent) scope.  This feature is known as "Parent Selectors", and can be done by putting the parent selector before an ampersand `&`.

For example, when using Modernizr, you might want to specify different rules based on supported features:

```css
.header {
  .menu {
    border-radius: 5px;
    .no-borderradius & {
      background-image: url('images/button-background.png');
    }
  }
}
```

The selector `.no-borderradius &` will be combined with the inherited scope, `.header .menu`, to form the selector `.no-borderradius .header .menu`.

```css
.header .menu {
  border-radius: 5px;
}
.no-borderradius .header .menu {
  background-image: url('images/button-background.png');
}
```
