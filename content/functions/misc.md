### color

> Parses a color, so a string representing a color becomes a color.

Parameters: `string`: a string of the specified color.

Returns: `color`

Example: `color("#aaa");`

Output: `#aaa`


### unit

> Remove or change the unit of a dimension

Parameters:
* `dimension`: A number, with or without a dimension.
* `unit`: (Optional) the unit to change to, or if omitted it will remove the unit.

Example: `unit(5, px)`

Output: `5px`

Example: `unit(5em)`

Output: `5`


### convert

> Convert a number from one unit into another.

The first argument contains a number with units and second argument contains units. If the units are compatible, the number is converted. If they are not compatible, the first argument is returned unmodified.

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
