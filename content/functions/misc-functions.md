### color

> Parses a color, so a string representing a color becomes a color.

Parameters: `string`: a string of the specified color.

Returns: `color`

Example: `color("#aaa");`

Output: `#aaa`


### convert

> Convert a number from one unit into another.

The first argument contains a number with units and second argument contains units. If the units are compatible, the number is converted. If they are not compatible, the first argument is returned unmodified.

See [unit](#misc-functions-unit) for changing the unit without conversion.

_Compatible unit groups_:

* lengths: `m`, `cm`, `mm`, `in`, `pt` and `pc`,
* time: `s` and `ms`,
* angle: `rad`, `deg`, `grad` and `turn`.

Parameters:
* `number`: a floating point number with units.
* `identifier`, `string` or `escaped value`: units

Returns: `number`

Example:

```less
convert(9s, "ms")
convert(14cm, mm)
convert(8, mm) // incompatible unit types
```

Output:

```
9000ms
140mm
8
```


### data-uri

> Inlines a resource and falls back to `url()` if the ieCompat option is on and the resource is too large, or if you use the function in the browser. If the MIME type is not given then node uses the mime package to determine the correct mime type.

Parameters:
* `mimetype`: (Optional) A MIME type string.
* `url`: The URL of the file to inline.

Example: `data-uri('../data/image.jpg');`

Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`

Output in browser: `url('../data/image.jpg');`

Example: `data-uri('image/jpeg;base64', '../data/image.jpg');`

Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`

### default

> Available only inside guard conditions and returns `true` only if no other mixin matches, `false` otherwise.

Example:

```less
.mixin(1)                   {x: 11}
.mixin(2)                   {y: 22}
.mixin(@x) when (default()) {z: @x}

div {
  .mixin(3);
}

div.special {
  .mixin(1);
}
```
Output:

```css
div {
  z: 3;
}
div.special {
  x: 11;
}
```

It is possible to use the value returned by `default` with guard operators. For example `.mixin() when not(default()) {}` will match only if there's at least one more mixin definition that matches`.mixin()` call:

```less
.mixin(@value) when (ispixel(@value)) {width: @value}
.mixin(@value) when not(default())    {padding: (@value / 5)}

div-1 {
  .mixin(100px);
}

div-2 {
  /* ... */
  .mixin(100%);
}
```
result:

```css
div-1 {
  width: 100px;
  padding: 20px;
}
div-2 {
  /* ... */
}
```

It is allowed to make multiple `default()` calls in the same guard condition or in a different conditions of a mixins with the same name:

```less
div {
  .m(@x) when (default()), not(default())    {always: @x}
  .m(@x) when (default()) and not(default()) {never:  @x}

  .m(1); // OK
}
```
However Less will throw a error if it detects a *potential* conflict between multiple mixin definitions using `default()`:

```less
div {
  .m(@x) when (default())    {}
  .m(@x) when not(default()) {}

  .m(1); // Error
}
```
In above example it is impossible to determine what value each `default()` call should return since they recursively depend on each other.

Advanced multiple `default()` usage:

```less
.x {
  .m(red)                                    {case-1: darkred}
  .m(blue)                                   {case-2: darkblue}
  .m(@x) when (iscolor(@x)) and (default())  {default-color: @x}
  .m('foo')                                  {case-1: I am 'foo'}
  .m('bar')                                  {case-2: I am 'bar'}
  .m(@x) when (isstring(@x)) and (default()) {default-string: and I am the default}

  &-blue  {.m(blue)}
  &-green {.m(green)}
  &-foo   {.m('foo')}
  &-baz   {.m('baz')}
}
```
Result:

```css
.x-blue {
  case-2: #00008b;
}
.x-green {
  default-color: #008000;
}
.x-foo {
  case-1: I am 'foo';
}
.x-baz {
  default-string: and I am the default;
}
```

The `default` function is available as a Less built-in function _only inside guard expressions_. If used outside of a mixin guard condition it is interpreted as a regular CSS value:

Example:

```less
div {
  foo: default();
  bar: default(42);
}
```
Result:

```css
div {
  foo: default();
  bar: default(42);
}
```


### unit

> Remove or change the unit of a dimension

Parameters:
* `dimension`: A number, with or without a dimension.
* `unit`: (Optional) the unit to change to, or if omitted it will remove the unit.

See [convert](#misc-functions-convert) for changing the unit without conversion.

Example: `unit(5, px)`

Output: `5px`

Example: `unit(5em)`

Output: `5`



### get-unit

> Returns units of a number.

If the argument contains a number with units, the function returns its units. The argument without units results in an empty return value.

Parameters:
* `number`: a number with or without units.

Example: `get-unit(5px)`

Output: `px`

Example: `get-unit(5)`

Output: ` //nothing` 
