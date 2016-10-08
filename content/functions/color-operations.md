Color operations generally take parameters in the same units as the values they are changing, and percentages are handled as absolutes, so increasing a 10% value by 10% results in 20%. Set the option method parameter to relative for relative percentages. When using relative percentages increasing a 10% value by 10% results in 11%. Values are clamped to their allowed ranges; they do not wrap around. Where return values are shown, we've used formats that make it clear what each function has done, in addition to the hex versions that you will usually be be working with.

### saturate

> Increase the saturation of a color in the HSL color space by an absolute amount.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `saturate(hsl(90, 80%, 50%), 20%)`

Output: `#80ff00 // hsl(90, 100%, 50%)`

![Color 1](holder.js/100x40/#80e619:#000000/text:80e619) ➜ ![Color 2](holder.js/100x40/#80ff00:#000000/text:80ff00)

### desaturate

> Decrease the saturation of a color in the HSL color space by an absolute amount.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `desaturate(hsl(90, 80%, 50%), 20%)`

Output: `#80cc33 // hsl(90, 60%, 50%)`

![Color 1](holder.js/100x40/#80e619:#000000/text:80e619) ➜ ![Color 2](holder.js/100x40/#80cc33:#000000/text:80cc33)

### lighten

> Increase the lightness of a color in the HSL color space by an absolute amount.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `lighten(hsl(90, 80%, 50%), 20%)`

Output: `#b3f075 // hsl(90, 80%, 70%)`

![Color 1](holder.js/100x40/#80e619:#000000/text:80e619) ➜ ![Color 2](holder.js/100x40/#b3f075:#000000/text:b3f075)

### darken

> Decrease the lightness of a color in the HSL color space by an absolute amount.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `darken(hsl(90, 80%, 50%), 20%)`

Output: `#4d8a0f // hsl(90, 80%, 30%)`

![Color 1](holder.js/100x40/#80e619:#000000/text:80e619) ➜ ![Color 2](holder.js/100x40/#4d8a0f:#000000/text:4d8a0f)

### fadein

> Decrease the transparency (or increase the opacity) of a color, making it more opaque.

Has no effect on opaque colors. To fade in the other direction use `fadeout`.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `fadein(hsla(90, 90%, 50%, 0.5), 10%)`

Output: `rgba(128, 242, 13, 0.6) // hsla(90, 90%, 50%, 0.6)`


### fadeout

> Increase the transparency (or decrease the opacity) of a color, making it less opaque. To fade in the other direction use `fadein`.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.
* `method`: Optional, set to `relative` for the adjustment to be relative to the current value.

Returns: `color`

Example: `fadeout(hsla(90, 90%, 50%, 0.5), 10%)`

Output: `rgba(128, 242, 13, 0.4) // hsla(90, 90%, 50%, 0.4)`


### fade

> Set the absolute opacity of a color. Can be applied to colors whether they already have an opacity value or not.

Parameters:

* `color`: A color object.
* `amount`: A percentage 0-100%.

Returns: `color`

Example: `fade(hsl(90, 90%, 50%), 10%)`

Output: `rgba(128, 242, 13, 0.1) //hsla(90, 90%, 50%, 0.1)`


### spin

> Rotate the hue angle of a color in either direction.

While the angle range is 0-360, it applies a mod 360 operation, so you can pass in much larger (or negative) values and they will wrap around e.g. angles of 360 and 720 will produce the same result. Note that colors are passed through an RGB conversion, which doesn't retain hue value for greys (because hue has no meaning when there is no saturation), so make sure you apply functions in a way that preserves hue, for example don't do this:

```less
@c: saturate(spin(#aaaaaa, 10), 10%);
```

Do this instead:

```less
@c: spin(saturate(#aaaaaa, 10%), 10);
```

Colors are always returned as RGB values, so applying `spin` to a grey value will do nothing.

Parameters:

* `color`: A color object.
* `angle`: A number of degrees to rotate (+ or -).

Returns: `color`

Example:

```less
spin(hsl(10, 90%, 50%), 30)
spin(hsl(10, 90%, 50%), -30)
```

Output:

```css
#f2a60d // hsl(40, 90%, 50%)
#f20d59 // hsl(340, 90%, 50%)
```

![Color 1](holder.js/100x40/#f2330d:#000000/text:f2330d) ➜ ![Color 2](holder.js/100x40/#f2a60d:#000000/text:f2a60d)

![Color 1](holder.js/100x40/#f2330d:#000000/text:f2330d) ➜ ![Color 2](holder.js/100x40/#f20d59:#000000/text:f20d59)

### mix

> Mix two colors together in variable proportion. Opacity is included in the calculations.

Parameters:

* `color1`: A color object.
* `color2`: A color object.
* `weight`: Optional, a percentage balance point between the two colors, defaults to 50%.

Returns: `color`

Example:

```less
mix(#ff0000, #0000ff, 50%)
mix(rgba(100,0,0,1.0), rgba(0,100,0,0.5), 50%)
```

Output:

```css
#800080
rgba(75, 25, 0, 0.75)
```

![Color 1](holder.js/100x40/#ff0000:#ffffff/text:ff0000) + ![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff) ➜ ![Color 3](holder.js/100x40/#800080:#ffffff/text:800080)

### tint

> Mix color with white in variable proportion. It is the same as calling ``mix(#ffffff, @color, @weight)``

Parameters:

* `color`: A color object.
* `weight`: Optional, a percentage balance point between color and white, defaults to 50%.

Returns: `color`

Example:

```less
no-alpha: tint(#007fff, 50%); 
with-alpha: tint(rgba(00,0,255,0.5), 50%); 
```

Output:

```css
no-alpha: #80bfff;
with-alpha: rgba(191, 191, 255, 0.75);
```

![Color 1](holder.js/100x40/#ff00ff:#ffffff/text:ff00ff) ➜ ![Color 2](holder.js/100x40/#ff80ff:#ffffff/text:ff80ff)

### shade

> Mix color with black in variable proportion. It is the same as calling ``mix(#000000, @color, @weight)``

Parameters:

* `color`: A color object.
* `weight`: Optional, a percentage balance point between color and black, defaults to 50%.

Returns: `color`

Example:

```less
no-alpha: shade(#007fff, 50%); 
with-alpha: shade(rgba(00,0,255,0.5), 50%); 
```

Output:

```css
no-alpha: #004080;
with-alpha: rgba(0, 0, 64, 0.75);
```

![Color 1](holder.js/100x40/#ff00ff:#ffffff/text:ff00ff) ➜ ![Color 2](holder.js/100x40/#800080:#ffffff/text:800080)

### greyscale

> Remove all saturation from a color in the HSL color space; the same as calling `desaturate(@color, 100%)`.

Because the saturation is not affected by hue, the resulting color mapping may be somewhat dull or muddy; [`luma`](#color-channel-luma) may provide a better result as it extracts perceptual rather than linear brightness, for example `greyscale('#0000ff')` will return the same value as `greyscale('#00ff00')`, though they appear quite different in brightness to the human eye.

Parameters: `color`: A color object.

Returns: `color`

Example: `greyscale(hsl(90, 90%, 50%))`

Output: `#808080 // hsl(90, 0%, 50%)`

![Color 1](holder.js/100x40/#80f20d:#000000/text:80f20d) ➜ ![Color 2](holder.js/100x40/#808080:#000000/text:808080)

Notice that the generated grey looks darker than the original green, even though its lightness value is the same.

Compare with using `luma` (usage is different because `luma` returns a single value, not a color):

```less
@c: luma(hsl(90, 90%, 50%));
color: rgb(@c, @c, @c);
```

Output: `#cacaca`

![Color 1](holder.js/100x40/#80f20d:#000000/text:80f20d) ➜ ![Color 2](holder.js/100x40/#cacaca:#000000/text:cacaca)

This time the grey's lightness looks about the same as the green, though its value is actually higher.

### contrast

> Choose which of two colors provides the greatest contrast with another.

This is useful for ensuring that a color is readable against a background, which is also useful for accessibility compliance. This function works the same way as the [contrast function in Compass for SASS](http://compass-style.org/reference/compass/utilities/color/contrast/). In accordance with [WCAG 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef), colors are compared using their gamma-corrected [luma](#color-channel-luma) value, not their lightness.

The light and dark parameters can be supplied in either order - the function will calculate their luma values and assign light and dark automatically, which means you can't use this function to select the *least* contrasting color by reversing the order.

Parameters:

* `color`: A color object to compare against.
* `dark`: optional - A designated dark color (defaults to black).
* `light`: optional - A designated light color (defaults to white).
* `threshold`: optional - A percentage 0-100% specifying where the transition from "dark" to "light" is (defaults to 43%, matching SASS). This is used to bias the contrast one way or another, for example to allow you to decide whether a 50% grey background should result in black or white text. You would generally set this lower for 'lighter' palettes, higher for 'darker' ones.

Returns: `color`

Example:

```less
p {
    a: contrast(#bbbbbb);
    b: contrast(#222222, #101010);
    c: contrast(#222222, #101010, #dddddd);
    d: contrast(hsl(90, 100%, 50%), #000000, #ffffff, 30%);
    e: contrast(hsl(90, 100%, 50%), #000000, #ffffff, 80%);
}
```

Output:

```css
p {
    a: #000000 // black
    b: #ffffff // white
    c: #dddddd
    d: #000000 // black
    e: #ffffff // white
}
```
These examples use the above calculated colors for background and foreground; you can see that you never end up with white-on-white, nor black-on-black, though it's possible to use the threshold to permit lower-contrast outcomes, as in the last example:

![Color 1](holder.js/100x40/#bbbbbb:#000000/text:000000)
![Color 1](holder.js/100x40/#222222:#ffffff/text:ffffff)
![Color 1](holder.js/100x40/#222222:#dddddd/text:dddddd)
![Color 1](holder.js/100x40/#80ff00:#000000/text:000000)
![Color 1](holder.js/100x40/#80ff00:#ffffff/text:ffffff)
