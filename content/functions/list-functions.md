### length

> Returns the number of elements in a value list.

**Parameters**
- `list` - a comma or space separated list of values.

Example: `length(1px solid #0080ff);`

Output: `3`

Example:

```less
@list: "banana", "tomato", "potato", "peach";
n: length(@list);
```

Output:

```
n: 4;
```

### extract

> Returns the value at a specified position in a list.

**Parameters**
- `list` - a comma or space separated list of values.
- `index` - an integer that specifies a position of a list element to return.

Example: `extract(8px dotted red, 2);`

Output: `dotted`

Example:

```less
@list: apple, pear, coconut, orange;
value: extract(@list, 3);
```

Output:
```
value: coconut;
```

### range

_Released v3.9.0_

> Generate a list spanning a range of values

**Parameters**
- `start` - (optional) The start value _e.g. 1 or 1px_
- `end` - The end value _e.g. 5px_
- `step` - (optional) The amount to increment by

Examples:
```less
value: range(4);
```
Outputs:
```css
value: 1 2 3 4;
```

The output of each value in the range will be the same unit as the `end` value. For example:

```less
value: range(10px, 30px, 10);
```
Outputs:
```css
value: 10px 20px 30px;
```

### each

_Released v3.7.0_

> Bind the evaluation of a ruleset to each member of a list.

**Parameters**
- `list` - a comma or space separated list of values.
- `rules` - An anonymous ruleset/mixin

Example:
```less
@selectors: blue, green, red;

each(@selectors, {
  .sel-@{value} {
    a: b;
  }
});
```
Outputs:
```css
.sel-blue {
  a: b;
}
.sel-green {
  a: b;
}
.sel-red {
  a: b;
}
```
By default, each ruleset is bound, per list member, to a `@value`, `@key`, and `@index` variable. For most lists, `@key` and `@index` will be assigned the same value (numerical position, 1-based). However, you can also use rulesets _themselves_ as structured lists. As in:
```less

@set: {
  one: blue;
  two: green;
  three: red;
}
.set {
  each(@set, {
    @{key}-@{index}: @value;
  });
}
```
This will output:
```css
.set {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```
Since you can, of course, call mixins with guards for each ruleset call, this makes `each()` a very powerful function.

#### Setting variable names in `each()`

You don't have to use `@value`, `@key`, and `@index` in your `each()` function. In Less 3.7, with the `each()` function, Less is introducing the concept of anonymous mixins, which may expand to other parts of the syntax at a later date.

An anonymous mixin uses the form of `#()` or `.()` starting with `.` or `#` just like a regular mixin would. In `each()`, you can use it like this:
```less
.set-2() {
  one: blue;
  two: green;
  three: red;
}
.set-2 {
  // Call mixin and iterate each rule
  each(.set-2(), .(@v, @k, @i) {
    @{k}-@{i}: @v;
  });
}
```
This outputs, as expected:
```css
.set-2 {
  one-1: blue;
  two-2: green;
  three-3: red;
}
```

The `each()` function will take the variable names defined in the anonymous mixin and bind them to the `@value`, `@key` and `@index` values, in that order. If you only write `each(@list, #(@value) {})`, then neither `@key` nor `@index` will be defined.


#### Creating a `for` loop using `range` and `each`

_Requires Less v3.9.0_

You can emulate a `for` loop simply by generating a numerical list and using `each` to expand it to a ruleset.

Example:
```less
each(range(4), {
  .col-@{value} {
    height: (@value * 50px);
  }
});
```
Outputs:
```css
.col-1 {
  height: 50px;
}
.col-2 {
  height: 100px;
}
.col-3 {
  height: 150px;
}
.col-4 {
  height: 200px;
}
```