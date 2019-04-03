### ceil

> Rounds up to the next highest integer.

Parameters: `number` - a floating point number.

Returns: `integer`

Example: `ceil(2.4)`

Output: `3`


### floor

> Rounds down to the next lowest integer.

Parameters: `number` - a floating point number.

Returns: `integer`

Example: `floor(2.6)`

Output: `2`


### percentage

> Converts a floating point number into a percentage string.

Parameters: `number` - a floating point number.

Returns: `number`

Example: `percentage(0.5)`

Output: `50%`


### round

> Applies rounding.

Parameters:
* `number`: A floating point number.
* `decimalPlaces`: Optional: The number of decimal places to round to. Defaults to 0.

Returns: `number`

Example: `round(1.67)`

Output: `2`

Example: `round(1.67, 1)`

Output: `1.7`


### sqrt

> Calculates square root of a number. Keeps units as they are.

Parameters: `number` - floating point number.

Returns: `number`

Example:

```less
sqrt(25cm)
```

Output:

```css
5cm
```

Example:

```less
sqrt(18.6%)
```

Output:

```js
4.312771730569565%;
```


### abs

> Calculates absolute value of a number. Keeps units as they are.

Parameters: `number` - a floating point number.

Returns: `number`

Example #1: `abs(25cm)`

Output: `25cm`

Example #2: `abs(-18.6%)`

Output: `18.6%;`


### sin

> Calculates sine function.

Assumes radians on numbers without units.

Parameters: `number` - a floating point number.

Returns: `number`

Example:

```less
sin(1); // sine of 1 radian
sin(1deg); // sine of 1 degree
sin(1grad); // sine of 1 gradian
```

Output:

```
0.8414709848078965; // sine of 1 radian
0.01745240643728351; // sine of 1 degree
0.015707317311820675; // sine of 1 gradian
```


### asin

> Calculates arcsine (inverse of sine) function.

Returns number in radians e.g. a number between `-π/2` and `π/2`.

Parameters: `number` - floating point number from `[-1, 1]` interval.

Returns: `number`

Example:

```less
asin(-0.8414709848078965)
asin(0)
asin(2)
```

Output:

```
-1rad
0rad
NaNrad
```


### cos

> Calculates cosine function.

Assumes radians on numbers without units.

Parameters: `number` - a floating point number.

Returns: `number`

Example:

```less
cos(1) // cosine of 1 radian
cos(1deg) // cosine of 1 degree
cos(1grad) // cosine of 1 gradian
```

Output:

```
0.5403023058681398 // cosine of 1 radian
0.9998476951563913 // cosine of 1 degree
0.9998766324816606 // cosine of 1 gradian
```


### acos

> Calculates arccosine (inverse of cosine) function.

Returns number in radians e.g. a number between 0 and π.

Parameters: `number` - a floating point number from [-1, 1] interval.

Returns: `number`

Example:

```less
acos(0.5403023058681398)
acos(1)
acos(2)
```

Output:

```
1rad
0rad
NaNrad
```


### tan

> Calculates tangent function.

Assumes radians on numbers without units.

Parameters: `number` - a floating point number.

Returns: `number`

Example:

```less
tan(1) // tangent of 1 radian
tan(1deg) // tangent of 1 degree
tan(1grad) // tangent of 1 gradian
```

Output:

```
1.5574077246549023   // tangent of 1 radian
0.017455064928217585 // tangent of 1 degree
0.015709255323664916 // tangent of 1 gradian
```


### atan

> Calculates arctangent (inverse of tangent) function.

Returns number in radians e.g. a number between `-π/2` and `π/2`.

Parameters: `number` - a floating point number.

Returns: `number`

Example:

```less
atan(-1.5574077246549023)
atan(0)
round(atan(22), 6) // arctangent of 22 rounded to 6 decimal places
```

Output:

```
-1rad
0rad
1.525373rad;
```


### pi

> Returns &pi; (pi);

Parameters: `none`

Returns: `number`

Example:

```less
pi()
```

Output:

```
3.141592653589793
```


### pow

> Returns the value of the first argument raised to the power of the second argument.

Returned value has the same dimension as the first parameter and the dimension of the second parameter is ignored.

Parameters:
* `number`: base -a floating point number.
* `number`: exponent - a floating point number.

Returns: `number`

Example:

```less
pow(0cm, 0px)
pow(25, -2)
pow(25, 0.5)
pow(-25, 0.5)
pow(-25%, -0.5)
```

Output:

```
1cm
0.0016
5
NaN
NaN%
```


### mod

> Returns the value of the first argument modulus second argument.

Returned value has the same dimension as the first parameter, the dimension of the second parameter is ignored. The function is able to handle also negative and floating point numbers.

Parameters:
* `number`: a floating point number.
* `number`: a floating point number.

Returns: `number`

Example:

```less
mod(0cm, 0px)
mod(11cm, 6px);
mod(-26%, -5);
```

Output:

```
NaNcm;
5cm
-1%;
```


### min

> Returns the lowest of one or more values.

Parameters: `value1, ..., valueN` - one or more values to compare.

Returns: the lowest value.

Example: `min(5, 10);`

Output: `5`

Example: `min(3px, 42px, 1px, 16px);`

Output: `1px`


### max

> Returns the highest of one or more values.

Parameters: `value1, ..., valueN` - one or more values to compare.

Returns: the highest value.

Example: `max(5, 10);`

Output: `10`

Example: `max(3%, 42%, 1%, 16%);`

Output: `42%`
