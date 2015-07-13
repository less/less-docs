> "mix-in" properties from existing styles

You can mix-in class selectors and id selectors, e.g.

```less
.a, #b {
  color: red;
}
.mixin-class {
  .a();
}
.mixin-id {
  #b();
}
```
which results in:
```css
.a, #b {
  color: red;
}
.mixin-class {
  color: red;
}
.mixin-id {
  color: red;
}
```

Notice that when you call the mixin, the parentheses are optional.

```less
// these two statements do the same thing:
.a(); 
.a;
```

## Not Outputting the Mixin

If you want to create a mixin but you do not want that mixin to be output, you can put parentheses after it.

```less
.my-mixin {
  color: black;
}
.my-other-mixin() {
  background: white;
}
.class {
  .my-mixin;
  .my-other-mixin;
}
```
outputs

```css
.my-mixin {
  color: black;
}
.class {
  color: black;
  background: white;
}
```

## Selectors in Mixins

Mixins can contain more than just properties, they can contain selectors too.

For example:

```less
.my-hover-mixin() {
  &:hover {
    border: 1px solid red;
  }
}
button {
  .my-hover-mixin();
}
```

Outputs

```css
button:hover {
  border: 1px solid red;
}
```

## Namespaces

If you want to mixin properties inside a more complicated selector, you can stack up multiple id's or classes.

```less
#outer {
  .inner {
    color: red;
  }
}

.c {
  #outer > .inner;
}
```

and again both `>` and whitespace are optional

```less
// all do the same thing
#outer > .inner;
#outer > .inner();
#outer .inner;
#outer .inner();
#outer.inner;
#outer.inner();
```

One use of this is known as namespacing. You can put your mixins under a id selector and this makes sure it won't conflict with another library.

Example:

```less
#my-library {
  .my-mixin() {
    color: black;
  }
}
// which can be used like this
.class {
  #my-library > .my-mixin();
}
```

## Guarded Namespaces

If namespace have a guard, mixins defined by it are used only if guard condition returns true. Namespace guard is evaluated exactly the same way as guard on mixin, so next two mixins work the same way:

```less
#namespace when (@mode=huge) {
  .mixin() { /* */ }
}

#namespace {
  .mixin() when (@mode=huge) { /* */ }
}
```

The `default` function is assumed to have the same value for all nested namespaces and mixin. Following mixin is never evaluated, one of its guards is guaranteed to be false:

```less
#sp_1 when (default()) {
  #sp_2 when (default()) {
    .mixin() when not(default()) { /* */ }
  }
}
```

## The `!important` keyword

Use the `!important` keyword after mixin call to mark all properties inherited by it as `!important`:

Example:

```less
.foo (@bg: #f5f5f5, @color: #900) {
  background: @bg;
  color: @color;
}
.unimportant {
  .foo();
}
.important {
  .foo() !important;
}
```

Results in:

```css
.unimportant {
  background: #f5f5f5;
  color: #900;
}
.important {
  background: #f5f5f5 !important;
  color: #900 !important;
}
```
