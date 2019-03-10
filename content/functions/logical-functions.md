### if

> Returns one of two values depending on a condition.

Parameters:

* `condition`: A boolean expression
* `value1`: A value returned if `condition` is true.
* `value2`: A value returned if `condition` is not true.

Released: v3.0.0
Updated: v3.6.0

**Examples**:
```less
@some: foo;

div {
    margin: if((2 > 1), 0, 3px);
    color:  if((iscolor(@some)), @some, black);
}
```
Result:
```css
div {
    margin: 0;
    color:  black;
}
```

Notes: A boolean expression supported as the `conditional` parameter are the same as of [Guard Statements](/features/#mixins-feature-mixin-guards-feature).
```less
if(not (true), foo, bar);
if((true) and (2 > 1), foo, bar);
if((false) or (isstring("boo!")), foo, bar);
```
Note: before Less 3.6, the condition required a set of parentheses.
```less
if(2 > 1, blue, green);   // Causes an error in 3.0-3.5.3
if((2 > 1), blue, green); // Ok 3.0+
```

### boolean

> Evaluates to true or false

You can "store" a boolean test for later evaluation in a guard or `if()`.

Parameters:

* `condition`: A boolean expression

Released: v3.0.0
Updated: v3.6.0

**Examples**:
```less
@bg: black;
@bg-light: boolean(luma(@bg) > 50%);

div {
  background: @bg; 
  color: if(@bg-light, black, white);
}
```
Result:
```css
div {
  background: black;
  color: white;
}
```
