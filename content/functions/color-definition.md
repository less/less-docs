### rgb

> Creates an opaque color object from decimal red, green and blue (RGB) values.

Literal color values in standard HTML/CSS formats may also be used to define colors, for example `#ff0000`.

Parameters:
* `red`: An integer 0-255 or percentage 0-100%.
* `green`: An integer 0-255 or percentage 0-100%.
* `blue`: An integer 0-255 or percentage 0-100%.

Returns: `color`

Example: `rgb(90, 129, 32)`

Output: `#5a8120`


### rgba

> Creates a transparent color object from decimal red, green, blue and alpha (RGBA) values.

Parameters:

* `red`: An integer 0-255 or percentage 0-100%.
* `green`: An integer 0-255 or percentage 0-100%.
* `blue`: An integer 0-255 or percentage 0-100%.
* `alpha`: A number 0-1 or percentage 0-100%.

Returns: `color`

Example: `rgba(90, 129, 32, 0.5)`

Output: `rgba(90, 129, 32, 0.5)`


### argb

> Creates a hex representation of a color in `#AARRGGBB` format (**NOT** `#RRGGBBAA`!).

This format is used in Internet Explorer, and .NET and Android development.

Parameters: `color`, color object.

Returns: `string`

Example: `argb(rgba(90, 23, 148, 0.5));`

Output: `#805a1794`


### hsl

> Creates an opaque color object from hue, saturation and lightness (HSL) values.

Parameters:

* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `lightness`: A percentage 0-100% or number 0-1.

Returns: `color`

Example: `hsl(90, 100%, 50%)`

Output: `#80ff00`

This is useful if you want to create a new color based on another color's channel, forExample: `@new: hsl(hue(@old), 45%, 90%);`

`@new` will have `@old`'s *hue*, and its own saturation and lightness.


### hsla

> Creates a transparent color object from hue, saturation, lightness and alpha (HSLA) values.

Parameters:
* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `lightness`: A percentage 0-100% or number 0-1.
* `alpha`: A percentage 0-100% or number 0-1.

Returns: `color`

Example: `hsla(90, 100%, 50%, 0.5)`

Output: `rgba(128, 255, 0, 0.5)`


### hsv

> Creates an opaque color object from hue, saturation and value (HSV) values.

Note that this is a color space available in Photoshop, and is not the same as `hsl`.

Parameters:
* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `value`: A percentage 0-100% or number 0-1.

Returns: `color`

Example: `hsv(90, 100%, 50%)`

Output: `#408000`


### hsva

> Creates a transparent color object from hue, saturation, value and alpha (HSVA) values.

Note that this is not the same as `hsla`, and is a color space available in Photoshop.

Parameters:
* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `value`: A percentage 0-100% or number 0-1.
* `alpha`: A percentage 0-100% or number 0-1.

Returns: `color`

Example: `hsva(90, 100%, 50%, 0.5)`

Output: `rgba(64, 128, 0, 0.5)`
