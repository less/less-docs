Released [v3.5.0]({{ less.master.url }}CHANGELOG.md)

> Assigning mixin calls to a variable

Mixins can be assigned to a variable to be called as a variable call, or can be used for map lookup.

```less
#theme.dark.navbar {
  .colors(light) {
    primary: purple;
  }
  .colors(dark) {
    primary: black;
    secondary: grey;
  }
}

.navbar {
  @colors: #theme.dark.navbar.colors(dark);
  background: @colors[primary];
  border: 1px solid @colors[secondary];
}
```

This would output:

```css
.navbar {
  background: black;
  border: 1px solid grey;
}
```

#### Variable calls

Entire mixin calls can be aliased and called as variable calls. As in:

```less
#library() {
  .rules() {
    background: green;
  }
}
.box {
  @alias: #library.rules();
  @alias();
}
```
Outputs:
```css
.box {
  background: green;
}
```

Note, unlike mixins used in root, mixin calls assigned to variables and _called with no arguments_ always require parentheses. The following is not valid.

```less
#library() {
  .rules() {
    background: green;
  }
}
.box {
  @alias: #library.colors;
  @alias();   // ERROR: Could not evaluate variable call @alias
}
```

This is because it's ambiguous if variable is assigned a list of selectors or a mixin call. For example, in Less 3.5+, this variable could be used this way.

```less
.box {
  @alias: #library.colors;
  @{alias} {
    a: b;
  }
}
```
The above would output:
```css
.box #library.colors {
  a: b;
}
```
