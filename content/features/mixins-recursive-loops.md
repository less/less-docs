## Recursive Mixin ~~Calls~~ and Loops

...

~~It's not so easy to invent a very simple and in the same time less or more practical loop example. The simplest loops are totally useless and practical code is usually too advanced as it also uses many other (or at least one more) LESS features.~~

Example:
```less
.loop(@index) when (@index > 0) {
  .loop((@index - 1));    // next iteration
  width: (10px * @index); // code for each iteration
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

Example:
```less
@nColumns: 4;

.loop(1);
.loop(@i) when (@i <= @nColumns) {

  .column-@{i} {
    width: (@i * 100% / @nColumns)
  }

  .loop((@i + 1));
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
