
> Built-in functions supported by Less.js.

### Table of Contents 

### [String functions](https://github.com/cloudhead/less.js/wiki/Function-Reference#string-functions)
- [escape](https://github.com/cloudhead/less.js/wiki/Function-Reference#escape)
- [e](https://github.com/cloudhead/less.js/wiki/Function-Reference#e)
- [% format](https://github.com/cloudhead/less.js/wiki/Function-Reference#-format)

### [Misc functions](https://github.com/cloudhead/less.js/wiki/Function-Reference#misc-functions)
- [color](https://github.com/cloudhead/less.js/wiki/Function-Reference#color)
- [unit](https://github.com/cloudhead/less.js/wiki/Function-Reference#unit)
- [data-uri](https://github.com/cloudhead/less.js/wiki/Function-Reference#data-uri)

### [Math functions](https://github.com/cloudhead/less.js/wiki/Function-Reference#math-functions)
- [ceil](https://github.com/cloudhead/less.js/wiki/Function-Reference#ceil)
- [floor](https://github.com/cloudhead/less.js/wiki/Function-Reference#floor)
- [percentage](https://github.com/cloudhead/less.js/wiki/Function-Reference#percentage)
- [round](https://github.com/cloudhead/less.js/wiki/Function-Reference#round)
- [sqrt](https://github.com/cloudhead/less.js/wiki/Function-Reference#sqrt)
- [abs](https://github.com/cloudhead/less.js/wiki/Function-Reference#abs)
- [sin](https://github.com/cloudhead/less.js/wiki/Function-Reference#sin)
- [asin](https://github.com/cloudhead/less.js/wiki/Function-Reference#asin)
- [cos](https://github.com/cloudhead/less.js/wiki/Function-Reference#cos)
- [acos](https://github.com/cloudhead/less.js/wiki/Function-Reference#acos)
- [tan](https://github.com/cloudhead/less.js/wiki/Function-Reference#tan)
- [atan](https://github.com/cloudhead/less.js/wiki/Function-Reference#atan)
- [pi](https://github.com/cloudhead/less.js/wiki/Function-Reference#pi)
- [pow](https://github.com/cloudhead/less.js/wiki/Function-Reference#pow)
- [mod](https://github.com/cloudhead/less.js/wiki/Function-Reference#mod)
- [convert](https://github.com/cloudhead/less.js/wiki/Function-Reference#convert)
- [Unit](https://github.com/cloudhead/less.js/wiki/Function-Reference#unit-1)


## [Color functions](https://github.com/cloudhead/less.js/wiki/Function-Reference#color-functions)
#### [Color definition](https://github.com/cloudhead/less.js/wiki/Function-Reference#color-definition)
  - [rgb](https://github.com/cloudhead/less.js/wiki/Function-Reference#rgb)
  - [rgba](https://github.com/cloudhead/less.js/wiki/Function-Reference#rgba)
  - [argb](https://github.com/cloudhead/less.js/wiki/Function-Reference#argb)
  - [hsl](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsl)
  - [hsla](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsla)
  - [hsv](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsv)
  - [hsva](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsva)

#### [Color channel information](https://github.com/cloudhead/less.js/wiki/Function-Reference#color-channel-information)
  - [hue](https://github.com/cloudhead/less.js/wiki/Function-Reference#hue)
  - [saturation](https://github.com/cloudhead/less.js/wiki/Function-Reference#saturation)
  - [lightness](https://github.com/cloudhead/less.js/wiki/Function-Reference#lightness)
  - [hsvhue](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsvhue)
  - [hsvsaturation](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsvsaturation)
  - [hsvvalue](https://github.com/cloudhead/less.js/wiki/Function-Reference#hsvvalue)
  - [red](https://github.com/cloudhead/less.js/wiki/Function-Reference#red)
  - [green](https://github.com/cloudhead/less.js/wiki/Function-Reference#green)
  - [blue](https://github.com/cloudhead/less.js/wiki/Function-Reference#blue)
  - [alpha](https://github.com/cloudhead/less.js/wiki/Function-Reference#alpha)
  - [luma](https://github.com/cloudhead/less.js/wiki/Function-Reference#luma)

#### [Color operations](https://github.com/cloudhead/less.js/wiki/Function-Reference#color-operations)
  - [saturate](https://github.com/cloudhead/less.js/wiki/Function-Reference#saturate)
  - [desaturate](https://github.com/cloudhead/less.js/wiki/Function-Reference#desaturate)
  - [lighten](https://github.com/cloudhead/less.js/wiki/Function-Reference#lighten)
  - [darken](https://github.com/cloudhead/less.js/wiki/Function-Reference#darken)
  - [fadein](https://github.com/cloudhead/less.js/wiki/Function-Reference#fadein)
  - [fadeout](https://github.com/cloudhead/less.js/wiki/Function-Reference#fadeout)
  - [fade](https://github.com/cloudhead/less.js/wiki/Function-Reference#fade)
  - [spin](https://github.com/cloudhead/less.js/wiki/Function-Reference#spin)
  - [mix](https://github.com/cloudhead/less.js/wiki/Function-Reference#mix)
  - [greyscale](https://github.com/cloudhead/less.js/wiki/Function-Reference#greyscale)
  - [contrast](https://github.com/cloudhead/less.js/wiki/Function-Reference#contrast)

#### [Color blending](https://github.com/cloudhead/less.js/wiki/Function-Reference#color-blending)
  - [multiply](https://github.com/cloudhead/less.js/wiki/Function-Reference#multiply)
  - [screen](https://github.com/cloudhead/less.js/wiki/Function-Reference#screen)
  - [overlay](https://github.com/cloudhead/less.js/wiki/Function-Reference#overlay)
  - [softlight](https://github.com/cloudhead/less.js/wiki/Function-Reference#softlight)
  - [hardlight](https://github.com/cloudhead/less.js/wiki/Function-Reference#hardlight)
  - [difference](https://github.com/cloudhead/less.js/wiki/Function-Reference#difference)
  - [exclusion](https://github.com/cloudhead/less.js/wiki/Function-Reference#exclusion)
  - [average](https://github.com/cloudhead/less.js/wiki/Function-Reference#average)
  - [negation](https://github.com/cloudhead/less.js/wiki/Function-Reference#negation)


---


| Function                        | Description          |
| ------------------------------- | -------------------- |
| `escape(@string);`              | URL encodes a string |
| `e(@string);`                   | escape string content |
| `%(@string, values...);`        | formats a string |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `unit(@dimension, [@unit: ""]);` | remove or change the unit of a dimension |
| `color(@string);`               | parses a string to a color |
| `data-uri([mimetype,] url);`    | \* inlines a resource and falls back to url() |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `ceil(@number);`                  | rounds up to an integer |
| `floor(@number);`                 | rounds down to an integer |
| `percentage(@number);`            | converts to a %, e.g. 0.5 > 50% |
| `round(number, [places: 0]);`     | rounds a number to a number of places |
| `sqrt(number);`                   | \* calculates square root of a number |
| `abs(number);`                    | \* absolute value of a number |
| `sin(number);`                    | \* sine function |
| `asin(number);`                   | \* arcsine - inverse of sine function |
| `cos(number);`                    | \* cosine function |
| `acos(number);`                   | \* arccosine - inverse of cosine function |
| `tan(number);`                    | \* tangent function |
| `atan(number);`                   | \* arctangent - inverse of tangent function |
| `pi();`                           | \* returns pi |
| `pow(@base, @exponent);`          | \* first argument raised to the power of the second argument |
| `mod(number, number);`            | \* first argument modulus second argument |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `convert(number, units);`       | \* converts between number types |
| `unit(number, units);`          | \* changes number units without converting it |
| `color(string);`                | converts string or escaped value into color |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `rgb(@r, @g, @b);`                              | converts to a color |
| `rgba(@r, @g, @b, @a);`                         | converts to a color |
| `argb(@color);`                                 | creates a #AARRGGBB |
| `hsl(@hue, @saturation, @lightness);`           | creates a color |
| `hsla(@hue, @saturation, @lightness, @alpha);`  | creates a color |
| `hsv(@hue, @saturation, @value);`               | creates a color |
| `hsva(@hue, @saturation, @value, @alpha);`      | creates a color |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `hue(@color);`            | returns the `hue` channel of `@color` in the HSL space |
| `saturation(@color);`     | returns the `saturation` channel of `@color` in the HSL space |
| `lightness(@color);`      | returns the `lightness` channel of `@color` in the HSL space |
| `hsvhue(@color);`         | \* returns the `hue` channel of `@color` in the HSV space |
| `hsvsaturation(@color);`  | \* returns the `saturation` channel of `@color` in the HSV space |
| `hsvvalue(@color);`       | \* returns the `value` channel of `@color` in the HSV space |
| `red(@color);`            | returns the `red` channel of `@color` |
| `green(@color);`          | returns the `green` channel of `@color` |
| `blue(@color);`           | returns the `blue` channel of `@color` |
| `alpha(@color);`          | returns the `alpha` channel of `@color` |
| `luma(@color);`           | returns the `luma` value (perceptual brightness) of `@color` |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `saturate(@color, 10%);`                   | return `@color` 10% points *more* saturated |
| `desaturate(@color, 10%);`                 | return `@color` 10% points *less* saturated |
| `lighten(@color, 10%);`                    | return `@color` 10% points *lighter* |
| `darken(@color, 10%);`                     | return `@color` 10% points *darker* |
| `fadein(@color, 10%);`                     | return `@color` 10% points *less* transparent |
| `fadeout(@color, 10%);`                    | return `@color` 10% points *more* transparent |
| `fade(@color, 50%);`                       | return `@color` with 50% transparency |
| `spin(@color, 10);`                        | return `@color` with a 10 degree larger in hue |
| `mix(@color1, @color2, [@weight: 50%]);`   | return a mix of `@color1` and `@color2` |
| `greyscale(@color);`                       | returns a grey, 100% desaturated color |
| `contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]);`   | return `@darkcolor` if `@color1 is> 43% luma`, otherwise return `@lightcolor`, see notes |

| Name                            | Description          |
| ------------------------------- | -------------------- |
| `multiply(@color1, @color2);`   |  description... |
| `screen(@color1, @color2);`     |  description... |
| `overlay(@color1, @color2);`    |  description... |
| `softlight(@color1, @color2);`  |  description... |
| `hardlight(@color1, @color2);`  |  description... |
| `difference(@color1, @color2);` |  description... |
| `exclusion(@color1, @color2);`  |  description... |
| `average(@color1, @color2);`    |  description... |
| `negation(@color1, @color2);`   |  description... |

\* These functions are only available in the 1.4.0 beta
  

## String functions


### escape

> Applies [URL-encoding](http://en.wikipedia.org/wiki/Percent-encoding) to special characters found in the input string. 

* Following characters are exceptions and not encoded: `,`, `/`, `?`, `@`, `&`, `+`, `'`, `~`, `!` and `$`. 
* Most common encoded characters are: `\<space\>`, `#`, `^`, `(`, `)`, `{`, `}`, `|`, `:`, `>`, `<`, `;`, `]`, `[` and `=`.

<span class="warning">Parameters</span>: `string`: a string to escape.

<span class="warning">Returns</span>: escaped `string` content without quotes.

<span class="warning">Example</span>: `escape('a=1')`

<span class="warning">Output</span>: `a%3D1`
    
Note: Function behavior if a parameter is non-string parameters is not defined. Current implementation returns `undefined` on color and unchanged input on any other kind of argument. This behaviour should not be relied on and can change in the future.


### e

> CSS escaping similar to `~"value"` syntax. 

It expects string as a parameter and return its content as is, but without quotes. It can be used to output CSS value which is either not valid CSS syntax, or uses proprietary syntax which LESS doesn�t recognize.

<span class="warning">Parameters</span>: `string` - a string to escape.

<span class="warning">Returns</span>: `string` content without quotes.

<span class="warning">Example</span>: `filter: ~"ms:alwaysHasItsOwnSyntax.For.Stuff()";`

<span class="warning">Output</span>: `filter: ms:alwaysHasItsOwnSyntax.For.Stuff();`
    
Note: The function accepts also `~""` escaped values and numbers as parameters. Anything else returns an error.


### % format

> The function `%("format", arguments ...)` formats a string. 

The first argument is string with placeholders. All placeholders start with percentage symbol `%` followed by letter `s`,`S`,`d`,`D`,`a`, or `A`. Remaining arguments contain expressions to replace placeholders. If you need to print the percentage symbol, escape it by another percentage `%%`.

Use uppercase placeholders if you need to escape special characters into their utf-8 escape codes. 
The function escapes all special characters except `()'~!`. Space is encoded as `%20`. Lowercase placeholders leave special characters as they are. 

Placeholders:
* `d`, `D`, `a`, `A` - can be replaced by any kind of argument (color, number, escaped value, expression, ...). If you use them in combination with string, the whole string will be used - including its quotes. However, the quotes are placed into the string as they are, they are not escaped by "/" nor anything similar.
* `s`, `S` - can be replaced by any kind of argument except color. If you use them in combination with string, only the string value will be used - string quotes are omitted.

<span class="warning">Parameters</span>:

* `string`: format string with placeholders,
* `anything`* : values to replace placeholders.

<span class="warning">Returns</span>: formatted `string`.

<span class="warning">Example</span>:

    format-a-d: %("repetitions: %a file: %d", 1 + 2, "directory/file.less");
    format-a-d-upper: %('repetitions: %A file: %D', 1 + 2, "directory/file.less");
    format-s: %("repetitions: %s file: %s", 1 + 2, "directory/file.less");
    format-s-upper: %('repetitions: %S file: %S', 1 + 2, "directory/file.less");

<span class="warning">Output</span>:

    format-a-d: "repetitions: 3 file: "directory/file.less"";
    format-a-d-upper: "repetitions: 3 file: %22directory%2Ffile.less%22";
    format-s: "repetitions: 3 file: directory/file.less";
    format-s-upper: "repetitions: 3 file: directory%2Ffile.less";
    



## Misc functions

### color

> Parses a color, so a string representing a color becomes a color.

<span class="warning">Parameters</span>: `string` - a string of the color.

<span class="warning">Example</span>: `color("#aaa");`

<span class="warning">Output</span>: `#aaa`


### unit

> Remove or change the unit of a dimension

<span class="warning">Parameters</span>:

* `dimension`: A number, with or without a dimension
* `unit`: Optional: the unit to change to, or if omitted it will remove the unit

<span class="warning">Example</span>: `unit(5, px)`

<span class="warning">Output</span>: `5px`

<span class="warning">Example</span>: `unit(5em)`

<span class="warning">Output</span>: `5`


### data-uri

> Inlines a resource and falls back to `url()` if the ieCompat option is on and the resource is too large, or if you use the function in the browser. If the mime is not given then node uses the mime package to determine the correct mime type.

<span class="warning">Parameters</span>:

* `mimetype`: A mime type string. Optional.
* `url`: The URL of the file to inline.

<span class="warning">Example</span>: `data-uri('../data/image.jpg');`

<span class="warning">Output</span>: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`

<span class="warning">Output in browser</span>: `url('../data/image.jpg');`

<span class="warning">Example</span>: `data-uri('image/jpeg;base64', '../data/image.jpg');`

<span class="warning">Output</span>: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`


## Math functions

### ceil

> Rounds up to the next highest integer.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `integer`

<span class="warning">Example</span>: `ceil(2.4)`

<span class="warning">Output</span>: `3`


### floor

> Rounds down to the next lowest integer.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `integer`

<span class="warning">Example</span>: `floor(2.6)`

<span class="warning">Output</span>: `2`


### percentage

> Converts a floating point number into a percentage string.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `string`

<span class="warning">Example</span>: `percentage(0.5)`

<span class="warning">Output</span>: `50%`


### round

> Applies rounding.

<span class="warning">Parameters</span>:

* `number`: A floating point number.
* `decimalPlaces`: Optional: The number of decimal places to round to. Defaults to 0.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>: `round(1.67)`

<span class="warning">Output</span>: `2`

<span class="warning">Example</span>: `round(1.67, 1)`

<span class="warning">Output</span>: `1.7`


### sqrt

> Calculates square root of a number. Keeps units as they are.

<span class="warning">Parameters</span>: `number` - floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    sqrt(25cm)

<span class="warning">Output</span>:

    5cm
  
<span class="warning">Example</span>:

    sqrt(18.6%)

<span class="warning">Output</span>:

    4.312771730569565%;


### abs

> Calculates absolute value of a number. Keeps units as they are.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example #1</span>: `abs(25cm)`

<span class="warning">Output</span>: `25cm`
  
<span class="warning">Example #2</span>: `abs(-18.6%)`

<span class="warning">Output</span>: `18.6%;`



### sin

> Calculates sine function.

Assumes radians on numbers without units.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    sin(1); // sine of 1 radian
    sin(1deg); // sine of 1 degree
    sin(1grad); // sine of 1 gradian

<span class="warning">Output</span>:

    0.8414709848078965; // sine of 1 radian
    0.01745240643728351; // sine of 1 degree
    0.015707317311820675; // sine of 1 gradian


### asin

> Calculates arcsine (inverse of sine) function. 

Returns number in radians e.g. a number between -&pi;/2 and &pi;/2.

<span class="warning">Parameters</span>: `number` - floating point number from [-1, 1] interval.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    asin(-0.8414709848078965)
    asin(0) 
    asin(2)

<span class="warning">Output</span>:

    -1rad
    0rad
    NaNrad


### cos

> Calculates cosine function. 

Assumes radians on numbers without units.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    cos(1) // cosine of 1 radian
    cos(1deg) // cosine of 1 degree
    cos(1grad) // cosine of 1 gradian

<span class="warning">Output</span>:

    0.5403023058681398 // cosine of 1 radian
    0.9998476951563913 // cosine of 1 degree
    0.9998766324816606 // cosine of 1 gradian


### acos

> Calculates arccosine (inverse of cosine) function. 

Returns number in radians e.g. a number between 0 and &pi;.

<span class="warning">Parameters</span>: `number` - a floating point number from [-1, 1] interval.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    acos(0.5403023058681398)
    acos(1) 
    acos(2)

<span class="warning">Output</span>:

    1rad
    0rad
    NaNrad


### tan

> Calculates tangent function. 

Assumes radians on numbers without units.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    tan(1) // tangent of 1 radian
    tan(1deg) // tangent of 1 degree
    tan(1grad) // tangent of 1 gradian

<span class="warning">Output</span>:

    1.5574077246549023 // tangent of 1 radian
    0.017455064928217585 // tangent of 1 degree
    0.015709255323664916 // tangent of 1 gradian


### atan

> Calculates arctangent (inverse of tangent) function. 

Returns number in radians e.g. a number between -&pi;/2 and &pi;/2.

<span class="warning">Parameters</span>: `number` - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    atan(-1.5574077246549023)
    atan(0)
    round(atan(22), 6) // arctangent of 22 rounded to 6 decimal places

<span class="warning">Output</span>:

    -1rad
    0rad
    1.525373rad;


### pi

> Returns &pi; (pi);

<span class="warning">Parameters</span>: `none`

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    pi()

<span class="warning">Output</span>:

    3.141592653589793


### pow

> Returns the value of the first argument raised to the power of the second argument. 

Returned value has the same dimension as the first parameter and the dimension of the second parameter is ignored.

<span class="warning">Parameters</span>:

* `number`: base -a floating point number.
* `number`: exponent - a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    pow(0cm, 0px)
    pow(25, -2)
    pow(25, 0.5)
    pow(-25, 0.5)
    pow(-25%, -0.5)

<span class="warning">Output</span>:

    1cm
    0.0016
    5
    NaN
    NaN%


### mod

> Returns the value of the first argument modulus second argument. 

Returned value has the same dimension as the first parameter, the dimension of the second parameter is ignored. The function is able to handle also negative and floating point numbers.

<span class="warning">Parameters</span>:

* `number`: a floating point number.
* `number`: a floating point number.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    mod(0cm, 0px)
    mod(11cm, 6px);
    mod(-26%, -5);

<span class="warning">Output</span>:

    NaNcm;
    5cm
    -1%;


### convert

> Converts numbers from one type into another. 

First argument contains number with units and second argument contains units. If both units are compatible, the number is converted. If they are not compatible, function returns first argument without modifying it.

<span class="warning">_Compatible unit groups_</span>:

* lengths: `m`, `cm`, `mm`, `in`, `pt` and `pc`,
* time: `s` and `ms`, 
* angle: `rad`, `deg`, `grad` and `turn`.

<span class="warning">Parameters</span>:

* `number`: a floating point number with units.
* `identifier`, `string` or `escaped value`: units

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    convert(9s, "ms")
    convert(14cm, mm)
    convert(8, mm) // incompatible unit types

<span class="warning">Output</span>:

    9000ms
    140mm
    8


### Unit 

> Returns number with different units. Only units are changed, number itself is not converted. 

The function assumes that second parameter contains valid unit type.

<span class="warning">Parameters</span>:

* `number`: a floating point number with units.
* `identifier` or `escaped value`: units.

<span class="warning">Returns</span>: `number`

<span class="warning">Example</span>:

    unit(9s, ~"ms")
    unit(-9, m)

<span class="warning">Output</span>:

    9ms
    -9m


### Color

> Converts a string or escaped value into a color. 

The input must contain color in hexadecimal or shorthand representation. 

<span class="warning">Parameters</span>: `identifier` or `escaped value` with valid color in hexadecimal or shorthand representation.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    color("#445566")
    color(~"#123")

<span class="warning">Output</span>:

    #445566
    #112233




## Color Functions: Color Definition

### rgb

> Creates an opaque color object from decimal red, green and blue (RGB) values. 

Literal color values in standard HTML/CSS formats may also be used to define colors, for example `#ff0000`.

<span class="warning">Parameters</span>:

* `red`: An integer 0-255 or percentage 0-100%.
* `green`: An integer 0-255 or percentage 0-100%.
* `blue`: An integer 0-255 or percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `rgb(90, 129, 32)`

<span class="warning">Output</span>: `#5a8120`

### rgba

> Creates a transparent color object from decimal red, green, blue and alpha (RGBA) values.

<span class="warning">Parameters</span>:

* `red`: An integer 0-255 or percentage 0-100%.
* `green`: An integer 0-255 or percentage 0-100%.
* `blue`: An integer 0-255 or percentage 0-100%.
* `alpha`: An number 0-1 or percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `rgba(90, 129, 32, 0.5)`

<span class="warning">Output</span>: `rgba(90, 129, 32, 0.5)`

### argb

> Creates a hex representation of a color in `#AARRGGBB` format (**NOT** `#RRGGBBAA`!). 

This format is used in Internet Explorer, and .NET and Android development.

<span class="warning">Parameters</span>: `color` - color object.

<span class="warning">Returns</span>: `string`

<span class="warning">Example</span>: `argb(rgba(90, 23, 148, 0.5));`

<span class="warning">Output</span>: `#805a1794`

### hsl

> Creates an opaque color object from hue, saturation and lightness (HSL) values.

<span class="warning">Parameters</span>:

* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `lightness`: A percentage 0-100% or number 0-1.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `hsl(90, 100%, 50%)`

<span class="warning">Output</span>: `#80ff00`

This is useful if you want to create a new color based on another color's channel, for <span class="warning">Example</span>: `@new: hsl(hue(@old), 45%, 90%);`

`@new` will have `@old`'s *hue*, and its own saturation and lightness.


### hsla

> Creates a transparent color object from hue, saturation, lightness and alpha (HSLA) values.

<span class="warning">Parameters</span>:

* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `lightness`: A percentage 0-100% or number 0-1.
* `alpha`: A percentage 0-100% or number 0-1.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `hsl(90, 100%, 50%, 0.5)`

<span class="warning">Output</span>: `rgba(128, 255, 0, 0.5)`

### hsv

> Creates an opaque color object from hue, saturation and value (HSV) values. 

Note that this is not the same as `hsl`, and is a color space available in Photoshop.

<span class="warning">Parameters</span>:

* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `value`: A percentage 0-100% or number 0-1.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `hsv(90, 100%, 50%)`

<span class="warning">Output</span>: `#408000`


### hsva

> Creates a transparent color object from hue, saturation, value and alpha (HSVA) values. 

Note that this is not the same as `hsla`, and is a color space available in Photoshop.

<span class="warning">Parameters</span>:

* `hue`: An integer 0-360 representing degrees.
* `saturation`: A percentage 0-100% or number 0-1.
* `value`: A percentage 0-100% or number 0-1.
* `alpha`: A percentage 0-100% or number 0-1.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `hsva(90, 100%, 50%, 0.5)`

<span class="warning">Output</span>: `rgba(64, 128, 0, 0.5)`



## Color Functions: Color Channel Information

### hue

> Extracts the hue channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `integer` `0-360`

<span class="warning">Example</span>: `hue(hsl(90, 100%, 50%))`

<span class="warning">Output</span>: `90`


### saturation

> Extracts the saturation channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `percentage` `0-100`

<span class="warning">Example</span>: `saturation(hsl(90, 100%, 50%))`

<span class="warning">Output</span>: `100%`



### lightness

> Extracts the lightness channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `percentage` `0-100`

<span class="warning">Example</span>: `lightness(hsl(90, 100%, 50%))`

<span class="warning">Output</span>: `50%`



### hsvhue

> Extracts the hue channel of a color object in the HSV color space.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `integer` `0-360`

<span class="warning">Example</span>: `hsvhue(hsv(90, 100%, 50%))`

<span class="warning">Output</span>: `90`



### hsvsaturation

> Extracts the saturation channel of a color object in the HSV color space.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `percentage` 0-100

<span class="warning">Example</span>: `hsvsaturation(hsv(90, 100%, 50%))`

<span class="warning">Output</span>: `100%`



### hsvvalue

> Extracts the value channel of a color object in the HSV color space.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `percentage` 0-100

<span class="warning">Example</span>: `hsvvalue(hsv(90, 100%, 50%))`

<span class="warning">Output</span>: `50%`



### red

> Extracts the red channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `integer` `0-255`

<span class="warning">Example</span>: `red(rgb(10, 20, 30))`

<span class="warning">Output</span>: `10`



### green

> Extracts the green channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `integer` 0-255

<span class="warning">Example</span>: `green(rgb(10, 20, 30))`

<span class="warning">Output</span>: `20`



### blue

> Extracts the blue channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `integer` 0-255

<span class="warning">Example</span>: `blue(rgb(10, 20, 30))`

<span class="warning">Output</span>: `30`



### alpha

> Extracts the alpha channel of a color object.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `float` `0-1`

<span class="warning">Example</span>: `alpha(rgba(10, 20, 30, 0.5))`

<span class="warning">Output</span>: `0.5`



### luma

> Calculates the [luma](http://en.wikipedia.org/wiki/Luma_(video)) (perceptual brightness) of a color object. 

Uses SMPTE C / Rec. 709 coefficients, as recommended in [WCAG 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef). This calculation is also used in the contrast function.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `percentage` 0-100%

<span class="warning">Example</span>: `luma(rgb(100, 200, 30))`

<span class="warning">Output</span>: `65%`


## Color Functions: Color operations

Color operations generally take parameters in the same units as the values they are changing, and percentage are handled as absolutes, so increasing a 10% value by 10% results in 20%, not 11%, and values are clamped to their allowed ranges; they do not wrap around. Where return values are shown, we've also shown formats that make it clear what each function has done, in addition to the hex versions that you will usually be be working with.


### saturate

> Increase the saturation of a color by an absolute amount.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `saturate(hsl(90, 90%, 50%), 10%)`

<span class="warning">Output</span>: `#80ff00 // hsl(90, 100%, 50%)`


### desaturate

> Decrease the saturation of a color by an absolute amount.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `desaturate(hsl(90, 90%, 50%), 10%)`

<span class="warning">Output</span>: `#80e51a // hsl(90, 80%, 50%)`


### lighten

> Increase the lightness of a color by an absolute amount.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `lighten(hsl(90, 90%, 50%), 10%)`

<span class="warning">Output</span>: `#99f53d // hsl(90, 90%, 60%)`


### darken

> Decrease the lightness of a color by an absolute amount.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `darken(hsl(90, 90%, 50%), 10%)`

<span class="warning">Output</span>: `#66c20a // hsl(90, 90%, 40%)`


### fadein

> Decrease the transparency (or increase the opacity) of a color, making it more opaque. 

Has no effect on opaque colours. To fade in the other direction use `fadeout`.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `fadein(hsla(90, 90%, 50%, 0.5), 10%)`

<span class="warning">Output</span>: `rgba(128, 242, 13, 0.6) // hsla(90, 90%, 50%, 0.6)`


### fadeout

> Increase the transparency (or decrease the opacity) of a color, making it less opaque. To fade in the other direction use `fadein`.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `fadeout(hsla(90, 90%, 50%, 0.5), 10%)`

<span class="warning">Output</span>: `rgba(128, 242, 13, 0.4) // hsla(90, 90%, 50%, 0.6)`


### fade

> Set the absolute transparency of a color. Can be applied to colors whether they already have an opacity value or not.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `amount`: A percentage 0-100%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `fade(hsl(90, 90%, 50%), 10%)`

<span class="warning">Output</span>: `rgba(128, 242, 13, 0.1) //hsla(90, 90%, 50%, 0.1)`


### spin

> Rotate the hue angle of a color in either direction. 

While the angle range is 0-360, it applies a mod 360 operation, so you can pass in much larger (or negative) values and they will wrap around e.g. angles of 360 and 720 will produce the same result. Note that colours are passed through an RGB conversion, which doesn't retain hue value for greys (because hue has no meaning when there is no saturation), so make sure you apply functions in a way that preserves hue, for example don't do this:

    @c: saturate(spin(#aaaaaa, 10), 10%);

Do this instead:

    @c: spin(saturate(#aaaaaa, 10%), 10);

Colors are always returned as RGB values, so applying `spin` to a grey value will do nothing.

<span class="warning">Parameters</span>: 

* `color` - a color object.
* `angle`: A number of degrees to rotate (+ or -).

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    spin(hsl(10, 90%, 50%), 20)
    spin(hsl(10, 90%, 50%), -20)

<span class="warning">Output</span>:

    #f27f0d // hsl(30, 90%, 50%)

    #f20d33 // hsl(350, 90%, 50%)


### mix

> Mix two colors together in variable proportion. Opacity is included in the calculations.

<span class="warning">Parameters</span>:

* `color1`: A color object.
* `color2`: A color object.
* `weight`: Optional, a percentage balance point between the two colors, defaults to 50%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    mix(#ff0000, #0000ff, 50%)
    mix(rgba(100,0,0,1.0), rgba(0,100,0,0.5), 50%)

<span class="warning">Output</span>:

    #800080

    rgba(75, 25, 0, 0.75)


### greyscale

> Remove all saturation from a color; the same as calling `desaturate(@color, 100%)`. 

Because the saturation is not affected by hue, the resulting color mapping may be somewhat dull or muddy; `luma` may provide a better result as it extracts perceptual rather than linear brightness, for example `greyscale('#0000ff')` will return the same value as `greyscale('#00ff00')`, though they appear quite different in brightness to the human eye.

<span class="warning">Parameters</span>: `color` - a color object.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>: `greyscale(hsl(90, 90%, 50%))`

<span class="warning">Output</span>: `#808080 // hsl(90, 0%, 50%)`


### contrast

> Choose which of two colors provides the greatest contrast with another. 

This is useful for ensuring that a color is readable against a background, which is also useful for accessibility compliance. This function works the same way as the [contrast function in Compass for SASS](http://compass-style.org/reference/compass/utilities/color/contrast/). In accordance with [WCAG 2.0](http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef), colors are compared using their luma value, not their lightness.

The light and dark parameters can be supplied in either order - the function will calculate their luma values and assign light and dark appropriately.

<span class="warning">Parameters</span>:

* `color`: A color object to compare against.
* `dark`: optional - A designated dark color (defaults to black).
* `light`: optional - A designated light color (defaults to white).
* `threshold`: optional - A percentage 0-100% specifying where the transition from "dark" to "light" is (defaults to 43%). This is used to bias the contrast one way or another, for example to allow you to decide whether a 50% grey background should result in black or white text. You would generally set this lower for 'lighter' palettes, higher for 'darker' ones. Defaults to 43%.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    contrast(#aaaaaa)
    contrast(#222222, #101010)
    contrast(#222222, #101010, #dddddd)
    contrast(hsl(90, 100%, 50%),#000000,#ffffff,40%);
    contrast(hsl(90, 100%, 50%),#000000,#ffffff,60%);

<span class="warning">Output</span>:

    #000000 // black
    #ffffff // white
    #dddddd
    #000000 // black
    #ffffff // white


## Color Functions: Color blending

These operations are _similar_ as the blend modes found in image editors like Photoshop, Firework or GIMP, so you can use them to make your CSS colors match your images.


### multiply

> Multiply two colors. For each two colors their RGB channel are multiplied then divided by 255. The result is a darker color.

<span class="warning">Parameters</span>:

* `color1`: A color object to multiply against.
* `color2`: A color object to multiply against.

<span class="warning">Returns</span>: `color`

**Examples**:

    multiply(#ff6600, #000000);
    
![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/000000/ffffff&text=000000)
    
    multiply(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/331400/ffffff&text=331400)

    multiply(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/662900/ffffff&text=662900)

    multiply(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/993d00/ffffff&text=993d00)

    multiply(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/cc5200/ffffff&text=cc5200)

    multiply(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    multiply(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)

    multiply(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/006600/ffffff&text=006600)

    multiply(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)


### screen

> Do the opposite effect from `multiply`. The result is a brighter color.

<span class="warning">Parameters</span>:

* `color1`: A color object to _screen_ against.
* `color2`: A color object to _screen_ against.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    screen(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    screen(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/ff8533/ffffff&text=ff8533)

    screen(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/ffa366/ffffff&text=ffa366)

    screen(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ffc299/000000&text=ffc299)

    screen(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/ffe0cc/000000&text=ffe0cc)

    screen(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ffffff/000000&text=ffffff)

    screen(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    screen(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ffff00/ffffff&text=ffff00)

    screen(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ff66ff/000000&text=ff66ff)


### overlay

> Combines the effect from both `multiply` and `screen`. Conditionally make light channels lighter and dark channels darker. **Note**: The results of the conditions are determined by the first color parameter.

<span class="warning">Parameters</span>:

* `color1`: A color object to overlay another. Also it is the determinant color to make the result lighter or darker.
* `color2`: A color object to be _overlayed_.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    overlay(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)

    overlay(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/ff2900/ffffff&text=ff2900)

    overlay(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/ff5200/ffffff&text=ff5200)

    overlay(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ff7a00/ffffff&text=ff7a00)

    overlay(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/ffa300/ffffff&text=ffa300)

    overlay(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ffcc00/ffffff&text=ffcc00)

    overlay(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)

    overlay(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/ffcc00/ffffff&text=ffcc00)

    overlay(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)


### softlight

> Similar to `overlay` but avoid pure black resulting in pure black, and pure white resulting in pure white.

<span class="warning">Parameters</span>:

* `color1`: A color object to _soft light_ another.
* `color2`: A color object to be _soft lighten_.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    softlight(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff2900/ffffff&text=ff2900)

    softlight(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/ff4100/ffffff&text=ff4100)

    softlight(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/ff5a00/ffffff&text=ff5a00)

    softlight(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ff7200/ffffff&text=ff7200)

    softlight(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/ff8b00/ffffff&text=ff8b00)

    softlight(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ffa300/ffffff&text=ffa300)

    softlight(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff2900/ffffff&text=ff2900)

    softlight(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/ffa300/ffffff&text=ffa300)

    softlight(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff2900/ffffff&text=ff2900)


### hardlight

> Similar to `overlay` but use the second color to detect light and dark channels instead of using the first color.

<span class="warning">Parameters</span>:

* `color1`: A color object to overlay another.
* `color2`: A color object to be _overlayed_. Also it is the determinant color to make the result lighter or darker.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    hardlight(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/000000/ffffff&text=000000)

    hardlight(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/662900/ffffff&text=662900)

    hardlight(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/cc5200/ffffff&text=cc5200)

    hardlight(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/ff8533/ffffff&text=ff8533)

    hardlight(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/ff2900/ffffff&text=ff2900)

    hardlight(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ffffff/000000&text=ffffff)

    hardlight(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)

    hardlight(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)

    hardlight(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)


### difference

> Substracts the second color from the first color. The operation is made per RGB channels. The result is a darker color.

<span class="warning">Parameters</span>:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    difference(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    difference(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/cc3333/ffffff&text=cc3333)

    difference(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/990066/ffffff&text=990066)

    difference(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/663399/ffffff&text=663399)

    difference(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/3366cc/ffffff&text=3366cc)

    difference(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/0099ff/ffffff&text=0099ff)

    difference(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/006600/ffffff&text=006600)

    difference(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/ff9900/ffffff&text=ff9900)

    difference(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff66ff/000000&text=ff66ff)


### exclusion

> Similar effect to `difference` with lower contrast.

<span class="warning">Parameters</span>:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    exclusion(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    exclusion(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/cc7033/ffffff&text=cc7033)

    exclusion(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/997a66/ffffff&text=997a66)

    exclusion(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/668599/ffffff&text=668599)

    exclusion(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/338fcc/ffffff&text=338fcc)

    exclusion(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/0099ff/ffffff&text=0099ff)

    exclusion(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/006600/ffffff&text=006600)

    exclusion(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/ff9900/ffffff&text=ff9900)

    exclusion(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff66ff/000000&text=ff66ff)


### average

> Compute the average of two colors. The operation is made per RGB channels.

<span class="warning">Parameters</span>:

* `color1`: A color object.
* `color2`: A color object.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    average(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/803300/ffffff&text=803300)

    average(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/994d1a/ffffff&text=994d1a)

    average(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/b36633/ffffff&text=b36633)

    average(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/cc804d/ffffff&text=cc804d)

    average(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/e69966/ffffff&text=e69966)

    average(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/ffb380/000000&text=ffb380)

    average(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/ff3300/ffffff&text=ff3300)

    average(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/80b300/ffffff&text=80b300)

    average(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/803380/ffffff&text=803380)



### negation

> Do the opposite effect from `difference`. 

The result is a brighter color. **Note**: The _opposite_ effect doesn't mean the _inverted_ effect as resulting to an _addition_ operation.

<span class="warning">Parameters</span>:

* `color1`: A color object to act as the minuend.
* `color2`: A color object to act as the subtrahend.

<span class="warning">Returns</span>: `color`

<span class="warning">Example</span>:

    negation(#ff6600, #000000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/000000/ffffff&text=000000)
![Color 3](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)

    negation(#ff6600, #333333);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/333333/ffffff&text=333333)
![Color 3](http://placehold.it/100x40/cc9933/ffffff&text=cc9933)

    negation(#ff6600, #666666);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/666666/ffffff&text=666666)
![Color 3](http://placehold.it/100x40/99cc66/ffffff&text=99cc66)

    negation(#ff6600, #999999);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/999999/ffffff&text=999999)
![Color 3](http://placehold.it/100x40/66ff99/ffffff&text=66ff99)

    negation(#ff6600, #cccccc);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/cccccc/000000&text=cccccc)
![Color 3](http://placehold.it/100x40/33cccc/ffffff&text=33cccc)

    negation(#ff6600, #ffffff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ffffff/000000&text=ffffff)
![Color 3](http://placehold.it/100x40/0099ff/ffffff&text=0099ff)

    negation(#ff6600, #ff0000);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/ff0000/ffffff&text=ff0000)
![Color 3](http://placehold.it/100x40/006600/ffffff&text=006600)

    negation(#ff6600, #00ff00);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/00ff00/ffffff&text=00ff00)
![Color 3](http://placehold.it/100x40/ff9900/ffffff&text=ff9900)

    negation(#ff6600, #0000ff);

![Color 1](http://placehold.it/100x40/ff6600/ffffff&text=ff6600)
![Color 2](http://placehold.it/100x40/0000ff/ffffff&text=0000ff)
![Color 3](http://placehold.it/100x40/ff66ff/ffffff&text=ff66ff)