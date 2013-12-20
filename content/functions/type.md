<a id="isnumber"></a>
### isnumber

> Returns `true` if value is a number, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a number, `false` otherwise.

Example: 
```less
isnumber(#ff0);     // false
isnumber(blue);     // false
isnumber("string"); // false
isnumber(1234);     // true
isnumber(56px);     // true
isnumber(7.8%);     // true
isnumber(keyword);  // false
isnumber(url(...)); // false
```


<a id="isstring"></a>
### isstring

> Returns `true` if value is a string, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a string, `false` otherwise.

Example: 
```less
isstring(#ff0);     // false
isstring(blue);     // false
isstring("string"); // true
isstring(1234);     // false
isstring(56px);     // false
isstring(7.8%);     // false
isstring(keyword);  // false
isstring(url(...)); // false
```


<a id="iscolor"></a>
### iscolor

> Returns `true` if value is a color, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a color, `false` otherwise.

Example: 
```less
iscolor(#ff0);     // true
iscolor(blue);     // true
iscolor("string"); // false
iscolor(1234);     // false
iscolor(56px);     // false
iscolor(7.8%);     // false
iscolor(keyword);  // false
iscolor(url(...)); // false
```


<a id="iskeyword"></a>
### iskeyword

> Returns `true` if value is a keyword, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a keyword, `false` otherwise.

Example: 
```less
iskeyword(#ff0);     // false
iskeyword(blue);     // false
iskeyword("string"); // false
iskeyword(1234);     // false
iskeyword(56px);     // false
iskeyword(7.8%);     // false
iskeyword(keyword);  // true
iskeyword(url(...)); // false
```


<a id="isurl"></a>
### isurl

> Returns `true` if value is a url, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a url, `false` otherwise.

Example: 
```less
isurl(#ff0);     // false
isurl(blue);     // false
isurl("string"); // false
isurl(1234);     // false
isurl(56px);     // false
isurl(7.8%);     // false
isurl(keyword);  // false
isurl(url(...)); // true
```


<a id="ispixel"></a>
### ispixel

> Returns `true` if value is a number in pixels, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a pixel, `false` otherwise.

Example: 
```less
ispixel(#ff0);     // false
ispixel(blue);     // false
ispixel("string"); // false
ispixel(1234);     // false
ispixel(56px);     // true
ispixel(7.8%);     // false
ispixel(keyword);  // false
ispixel(url(...)); // false
```


<a id="isem"></a>
### isem

> Returns `true` if value is an em value, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is an em value, `false` otherwise.

Example: 
```less
isem(#ff0);     // false
isem(blue);     // false
isem("string"); // false
isem(1234);     // false
isem(56px);     // false
isem(7.8em);    // true
isem(keyword);  // false
isem(url(...)); // false
```


<a id="ispercentage"></a>
### ispercentage

> Returns `true` if value is a percentage value, `false` otherwise.

Parameters: `value` - a value or variable being evaluated.
Returns: `true` if value is a percentage value, `false` otherwise.

Example: 
```less
ispercentage(#ff0);     // false
ispercentage(blue);     // false
ispercentage("string"); // false
ispercentage(1234);     // false
ispercentage(56px);     // false
ispercentage(7.8%);     // true
ispercentage(keyword);  // false
ispercentage(url(...)); // false
```


<a id="isunit"></a>
### isunit

> Returns `true` if value is a number in specified units, `false` otherwise.

Parameters: 
* `value` - a value or variable being evaluated.
* `unit` - a unit identifier (optionaly quoted) to test for.
Returns: `true` if value is a number in specified units, `false` otherwise.

Example: 
```less
isunit(11px, px);  // true
isunit(2.2%, px);  // false
isunit(33px, rem); // true
isunit(4rem, rem); // false
isunit(56px, "%"); // false
isunit(7.8%, '%'); // true
isunit(1234, em);  // false
isunit(#ff0, pt);  // false
isunit("mm", mm);  // false
```
