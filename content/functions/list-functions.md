### length

> Returns the number of elements in a value list.

Parameters: `list` - a comma or space separated list of values.
Returns: an integer number of elements in a list

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

Parameters:
`list` - a comma or space separated list of values.
`index` - an integer that specifies a position of a list element to return.
Returns: a value at the specified position in a list.

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

### each

_Released v3.7.0_

Bind the evaluation of a ruleset to each member of a list.

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