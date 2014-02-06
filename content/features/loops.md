> Creating loops

In Less a mixin can call itself. Such recursive mixins, when combined with [Guard Expressions](#mixin-guards-feature) and [Pattern Matching](#mixins-parametric-feature-pattern-matching), can be used to create various iterative/loop structures.

Example:

```less
.loop(@counter) when (@counter > 0) {
  .loop((@counter - 1));    // next iteration
  width: (10px * @counter); // code for each iteration
}

div {
  .loop(5); // launch the loop
}
```

Output:

```css
div {
  width: 10px;
  width: 20px;
  width: 30px;
  width: 40px;
  width: 50px;
}
```

A generic example of using a recursive loop to generate CSS grid classes:

```less
.generate-columns(4);

.generate-columns(@n, @i: 1) when (@i =< @n) {
  .column-@{i} {
    width: (@i * 100% / @n);
  }
  .generate-columns(@n, (@i + 1));
}
```

Output:

```css
.column-1 {
  width: 25%;
}
.column-2 {
  width: 50%;
}
.column-3 {
  width: 75%;
}
.column-4 {
  width: 100%;
}
```
