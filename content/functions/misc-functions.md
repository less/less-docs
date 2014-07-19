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



### svg-gradient

> Generates multi-stop svg gradients.

Svg-gradient function generates multi-stop svg gradients. It must have at least three parameters. First parameter specifies gradient type and direction and remaining parameters list colors and their positions. The position of first and last specified color are optional, remaining colors must have positions specified.

The direction must be one of `to bottom`, `to right`, `to bottom right`, `to top right`, `ellipse` or `ellipse at center`. The direction can be specified as both escaped value and space separated list of words.

Parameters:
* `escaped value` or `list of identifiers`: direction
* `color [percentage]` pair: first color and its relative position (position is optional)
* `color percent` pair: (optional) second color and its relative position
* ...
* `color percent` pair: (optional) n-th color and its relative position
* `color [percentage]` pair: last color and its relative position (position is optional)

Returns: `url` with base64 encoded svg gradient.

Example:
````
div {
  background-image: svg-gradient(to right, red, green 30%, blue);
}
````

results in:
````
div {
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHZpZXdCb3g9IjAgMCAxIDEiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmMDAwMCIvPjxzdG9wIG9mZnNldD0iMzAlIiBzdG9wLWNvbG9yPSIjMDA4MDAwIi8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjMDAwMGZmIi8+PC9saW5lYXJHcmFkaWVudD48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSJ1cmwoI2dyYWRpZW50KSIgLz48L3N2Zz4=')
}
````

Generated background image has red color on the left, green at 30% of its width and ends with a blue color. Base64 encoded part contains following svg-gradient:
````xml
<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">
    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff0000"/>
        <stop offset="30%" stop-color="#008000"/>
        <stop offset="100%" stop-color="#0000ff"/>
    </linearGradient>
    <rect x="0" y="0" width="1" height="1" fill="url(#gradient)" />
</svg>
````

