# Comments

> TODO

## CSS Comments

CSS-style comments are preserved by LESS:

```less
.class {
  /* Hello, I'm a CSS-style comment */
  color: black
}
```

## LESS Comments

Single-line comments are also valid in LESS, but they are ‘silent’, they don’t show up in the compiled CSS output:

```less
.class {
  // Hi, I'm a silent comment, I won't show up in your CSS
  color: white
}
```

## TODO:
* document `/*! ... */`
* document and/or link to `--s0`/`--s1` options