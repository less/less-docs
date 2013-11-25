<a id="mixins" class="section_anchor"></a>

# Mixins
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

When you call the mixin, the parenthesis are optional.

```less
  .a();   //these lines do the same thing
  .a;
```

## Not outputting the mixin

If you want to create a mixin but you do not want that mixin to be output, you can put parenthesis around it.

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

## Selectors in mixins

Mixins can contain more than just properties, they can contain selectors to.

For example.

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

and again the > is optional

```less
  #outer > .inner;          // all do the same thing
  #outer > .inner();
  #outer.inner;
  #outer.inner();
```

One use of this is known as namespacing. You can put your mixins under a id selector and this makes sure it won't conflict with another library.

e.g.

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

## The Keyword !important
Use the !important keyword after mixin call to mark all properties brought by it as !important:

Sample input:

```less
.mixin (@a: 0) {
  border: @a;
  boxer: @a;
}
.unimportant {
  .mixin(1);
}
.important {
  .mixin(2) !important;
}
```

compiled into:

```css
.unimportant {
  border: 1;
  boxer: 1;
}
.important {
  border: 2 !important;
  boxer: 2 !important;
}
```