> These operations are _similar_ (though not necessarily identical) to the blend modes found in image editors like Photoshop, Fireworks, or GIMP, so you can use them to make your CSS colors match your images.

### multiply

> Multiply two colors. Corresponding RGB channels from each of the two colors are multiplied together then divided by 255. The result is a darker color.

Parameters:

* `color1`: A color object.
* `color2`: A color object.

Returns: `color`

**Examples**:

```less
multiply(#ff6600, #000000);
```
![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#000000:#ffffff/text:000000)

```less
multiply(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#331400:#ffffff/text:331400)

```less
multiply(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#662900:#ffffff/text:662900)

```less
multiply(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#993d00:#ffffff/text:993d00)

```less
multiply(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#cc5200:#ffffff/text:cc5200)

```less
multiply(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
multiply(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff0000:#ffffff/text:ff0000)

```less
multiply(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#006600:#ffffff/text:006600)

```less
multiply(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#000000:#ffffff/text:000000)


### screen

> Do the opposite of `multiply`. The result is a brighter color.

Parameters:

* `color1`: A color object.
* `color2`: A color object.

Returns: `color`

Example:

```less
screen(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
screen(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#ff8533:#ffffff/text:ff8533)

```less
screen(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#ffa366:#ffffff/text:ffa366)

```less
screen(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#ffc299:#000000/text:ffc299)

```less
screen(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#ffe0cc:#000000/text:ffe0cc)

```less
screen(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ffffff:#000000/text:ffffff)

```less
screen(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
screen(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ffff00:#ffffff/text:ffff00)

```less
screen(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff66ff:#000000/text:ff66ff)


### overlay

> Combines the effects of both `multiply` and `screen`. Conditionally make light channels lighter and dark channels darker. **Note**: The results of the conditions are determined by the first color parameter.

Parameters:

* `color1`: A base color object. Also the determinant color to make the result lighter or darker.
* `color2`: A color object to _overlay_.

Returns: `color`

Example:

```less
overlay(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff0000:#ffffff/text:ff0000)

```less
overlay(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#ff2900:#ffffff/text:ff2900)

```less
overlay(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#ff5200:#ffffff/text:ff5200)

```less
overlay(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#ff7a00:#ffffff/text:ff7a00)

```less
overlay(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#ffa300:#ffffff/text:ffa300)

```less
overlay(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ffcc00:#ffffff/text:ffcc00)

```less
overlay(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff0000:#ffffff/text:ff0000)

```less
overlay(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ffcc00:#ffffff/text:ffcc00)

```less
overlay(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff0000:#ffffff/text:ff0000)


### softlight

> Similar to `overlay` but avoids pure black resulting in pure black, and pure white resulting in pure white.

Parameters:

* `color1`: A color object to _soft light_ another.
* `color2`: A color object to be _soft lighten_.

Returns: `color`

Example:

```less
softlight(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff2900:#ffffff/text:ff2900)

```less
softlight(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#ff4100:#ffffff/text:ff4100)

```less
softlight(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#ff5a00:#ffffff/text:ff5a00)

```less
softlight(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#ff7200:#ffffff/text:ff7200)

```less
softlight(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#ff8a00:#ffffff/text:ff8a00)

```less
softlight(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ffa100:#ffffff/text:ffa100)

```less
softlight(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff2900:#ffffff/text:ff2900)

```less
softlight(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ffa100:#ffffff/text:ffa100)

```less
softlight(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff2900:#ffffff/text:ff2900)


### hardlight

> The same as `overlay` but with the color roles reversed.

Parameters:

* `color1`: A color object to _overlay_.
* `color2`: A base color object. Also the determinant color to make the result lighter or darker.

Returns: `color`

Example:

```less
hardlight(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#000000:#ffffff/text:000000)

```less
hardlight(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#662900:#ffffff/text:662900)

```less
hardlight(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#cc5200:#ffffff/text:cc5200)

```less
hardlight(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#ff8533:#ffffff/text:ff8533)

```less
hardlight(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#ffc299:#ffffff/text:ffc299)

```less
hardlight(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ffffff:#000000/text:ffffff)

```less
hardlight(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff0000:#ffffff/text:ff0000)

```less
hardlight(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#00ff00:#ffffff/text:00ff00)

```less
hardlight(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#0000ff:#ffffff/text:0000ff)


### difference

> Subtracts the second color from the first color on a channel-by-channel basis. Negative values are inverted. Subtracting black results in no change; subtracting white results in color inversion.

Parameters:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

Returns: `color`

Example:

```less
difference(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
difference(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#cc3333:#ffffff/text:cc3333)

```less
difference(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#990066:#ffffff/text:990066)

```less
difference(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#663399:#ffffff/text:663399)

```less
difference(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#3366cc:#ffffff/text:3366cc)

```less
difference(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#0099ff:#ffffff/text:0099ff)

```less
difference(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#006600:#ffffff/text:006600)

```less
difference(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ff9900:#ffffff/text:ff9900)

```less
difference(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff66ff:#000000/text:ff66ff)


### exclusion

> A similar effect to `difference` with lower contrast.

Parameters:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

Returns: `color`

Example:

```less
exclusion(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
exclusion(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#cc7033:#ffffff/text:cc7033)

```less
exclusion(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#997a66:#ffffff/text:997a66)

```less
exclusion(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#668599:#ffffff/text:668599)

```less
exclusion(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#338fcc:#ffffff/text:338fcc)

```less
exclusion(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#0099ff:#ffffff/text:0099ff)

```less
exclusion(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#006600:#ffffff/text:006600)

```less
exclusion(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ff9900:#ffffff/text:ff9900)

```less
exclusion(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff66ff:#000000/text:ff66ff)


### average

> Compute the average of two colors on a per-channel (RGB) basis.

Parameters:

* `color1`: A color object.
* `color2`: A color object.

Returns: `color`

Example:

```less
average(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#803300:#ffffff/text:803300)

```less
average(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#994d1a:#ffffff/text:994d1a)

```less
average(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#b36633:#ffffff/text:b36633)

```less
average(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#cc804d:#ffffff/text:cc804d)

```less
average(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#e69966:#ffffff/text:e69966)

```less
average(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#ffb380:#000000/text:ffb380)

```less
average(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#ff3300:#ffffff/text:ff3300)

```less
average(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#80b300:#ffffff/text:80b300)

```less
average(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#803380:#ffffff/text:803380)

### negation

> Do the opposite effect to `difference`.

The result is a brighter color. **Note**: The _opposite_ effect doesn't mean the _inverted_ effect as resulting from an _addition_ operation.

Parameters:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

Returns: `color`

Example:

```less
negation(#ff6600, #000000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#000000:#ffffff/text:000000)
![Color 3](holder.js/100x40/#ff6600:#ffffff/text:ff6600)

```less
negation(#ff6600, #333333);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#333333:#ffffff/text:333333)
![Color 3](holder.js/100x40/#cc9933:#ffffff/text:cc9933)

```less
negation(#ff6600, #666666);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#666666:#ffffff/text:666666)
![Color 3](holder.js/100x40/#99cc66:#ffffff/text:99cc66)

```less
negation(#ff6600, #999999);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#999999:#ffffff/text:999999)
![Color 3](holder.js/100x40/#66ff99:#ffffff/text:66ff99)

```less
negation(#ff6600, #cccccc);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#cccccc:#000000/text:cccccc)
![Color 3](holder.js/100x40/#33cccc:#ffffff/text:33cccc)

```less
negation(#ff6600, #ffffff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ffffff:#000000/text:ffffff)
![Color 3](holder.js/100x40/#0099ff:#ffffff/text:0099ff)

```less
negation(#ff6600, #ff0000);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#ff0000:#ffffff/text:ff0000)
![Color 3](holder.js/100x40/#006600:#ffffff/text:006600)

```less
negation(#ff6600, #00ff00);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#00ff00:#ffffff/text:00ff00)
![Color 3](holder.js/100x40/#ff9900:#ffffff/text:ff9900)

```less
negation(#ff6600, #0000ff);
```

![Color 1](holder.js/100x40/#ff6600:#ffffff/text:ff6600)
![Color 2](holder.js/100x40/#0000ff:#ffffff/text:0000ff)
![Color 3](holder.js/100x40/#ff66ff:#ffffff/text:ff66ff)
