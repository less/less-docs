### color

> Parses a color, so a string representing a color becomes a color.

Parameters: `string`: a string of the specified color.

Returns: `color`

Example: `color("#aaa");`

Output: `#aaa`

### image-size

> Gets the image dimensions from a file.

Parameters: `string`: the file to get the dimensions for.

Returns: `dimension`

Example: `image-size("file.png");`

Output: `10px 10px`

Note: this function needs to be implemented by each environment. It is currently only available in the node environment.

Added in: v2.2.0

### image-width

> Gets the image width from a file.

Parameters: `string`: the file to get the dimensions for.

Returns: `dimension`

Example: `image-width("file.png");`

Output: `10px`

Note: this function needs to be implemented by each environment. It is currently only available in the node environment.

Added in: v2.2.0

### image-height

> Gets the image height from a file.

Parameters: `string`: the file to get the dimensions for.

Returns: `dimension`

Example: `image-height("file.png");`

Output: `10px`

Note: this function needs to be implemented by each environment. It is currently only available in the node environment.

Added in: v2.2.0

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

If there is no mimetype, data-uri function guesses it from filename suffix. Text and svg files are encoded as utf-8 and anything else is encoded as base64. 

If user provided mimetype, the function uses base64 if mimetype argument ends with ;base64. For example, `image/jpeg;base64` is encoded into base64 while `text/html` is encoded into utf-8. 

Example: `data-uri('../data/image.jpg');`

Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`

Output in browser: `url('../data/image.jpg');`

Example: `data-uri('image/jpeg;base64', '../data/image.jpg');`

Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`

Example: `data-uri('image/svg+xml;charset=UTF-8', 'image.svg');`

Output: `url("data:image/svg+xml;charset=UTF-8,%3Csvg%3E%3Ccircle%20r%3D%229%22%2F%3E%3C%2Fsvg%3E");`

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

See [convert](#misc-functions-convert) for changing the unit with conversion.

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

The direction must be one of `to bottom`, `to right`, `to bottom right`, `to top right`, `ellipse` or `ellipse at center`. The direction can be specified as both escaped value `~'to bottom'` and space separated list of words `to bottom`.

The direction must be followed by two or more color stops. They can be supplied either inside a list or you can specify each color stops in separate argument. 

Parameters - colors stops in list:
* `escaped value` or `list of identifiers`: direction
* `list` - all colors and their positions in list

Parameters - color stops in arguments:
* `escaped value` or `list of identifiers`: direction
* `color [percentage]` pair: first color and its relative position (position is optional)
* `color percent` pair: (optional) second color and its relative position
* ...
* `color percent` pair: (optional) n-th color and its relative position
* `color [percentage]` pair: last color and its relative position (position is optional)

Returns: `url` with "URI-Encoded" svg gradient.

Example - colors stops in list:
```less
div {
  @list: red, green 30%, blue;
  background-image: svg-gradient(to right, @list);
}
```

equivalent - color stops in arguments:
```less
div {
  background-image: svg-gradient(to right, red, green 30%, blue);
}
```

both result in:
```css
div {
  background-image: url('data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20%3F%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20viewBox%3D%220%200%201%201%22%20preserveAspectRatio%3D%22none%22%3E%3ClinearGradient%20id%3D%22gradient%22%20gradientUnits%3D%22userSpaceOnUse%22%20x1%3D%220%25%22%20y1%3D%220%25%22%20x2%3D%22100%25%22%20y2%3D%220%25%22%3E%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23ff0000%22%2F%3E%3Cstop%20offset%3D%2230%25%22%20stop-color%3D%22%23008000%22%2F%3E%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%230000ff%22%2F%3E%3C%2FlinearGradient%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%221%22%20height%3D%221%22%20fill%3D%22url(%23gradient)%22%20%2F%3E%3C%2Fsvg%3E');
}
```
Note: in versions before 2.2.0 the result is `base64` encoded .

Generated background image has red color on the left, green at 30% of its width and ends with a blue color. Base64 encoded part contains following svg-gradient:
```xml
<?xml version="1.0" ?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 1 1" preserveAspectRatio="none">
    <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ff0000"/>
        <stop offset="30%" stop-color="#008000"/>
        <stop offset="100%" stop-color="#0000ff"/>
    </linearGradient>
    <rect x="0" y="0" width="1" height="1" fill="url(#gradient)" />
</svg>
```
