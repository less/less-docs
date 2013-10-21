---
published: false
---
From: [@seven-phases-max/pr#1606](https://github.com/less/less.js/pull/1606)

## Function `default`

> Available inside guard conditions and returns `true` only if no other mixin matches.  (see #1584)

## Usage:

```less
mixin(1)                   {x: 11}
mixin(2)                   {y: 22}
mixin(@x) when (default()) {z: @x}

div {
  mixin(3);
}

div.special {
  mixin(1);
}

```
### Expressions

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

```less
div-1 {
  width: 100px;
  padding: 20px;
}
div-2 {
  /* ... */
}
```

Another example:

```less
.expr-example {
  .m(@x) when (@x = true)      {v1: @x}
  .m(@x) when (@x = false)     {v2: @x}
  .m(@x) when (@x = default()) {v3: @x}

  &-true  {.m(true)}
  &-false {.m(false)}
}
```
result:

```less
.expr-example-true {
  v1: true;
}
.expr-example-false {
  v2: false;
  v3: false;
}
```

### Outside of guards

`default` is available as built-in function only inside guard expressions. If used outside of a mixin guard condition it is interpreted as a regular CSS value:

```less
div {
  property1: default();
  property2: default(42);
}
```
result:

```less
div {
  property1: default();
  property2: default(42);
}
```

### Advanced usage and multiple `default()` calls
It is allowed to make multiple `default()` calls in the same guard condition or in a different conditions of a mixins with the same name:

```less
div {
  .m(@x) when (default()), not(default())    {always: @x}
  .m(@x) when (default()) and not(default()) {never:  @x}

  .m(1); // OK
}
```
However LESS will throw a error if it detects a *potential* conflict between multiple mixin definitions using `default()`:

```less
div {
  .m(@x) when (default())    {}
  .m(@x) when not(default()) {}

  .m(1); // Error
}
```
In above example it is impossible to determine what value each `default()` call should return since they recursively depend on each other.

This "multiple `default()` calls" analysis is not too deep and very simple as its main intention is mostly to notify a user of possibly incorrect `default` usage, hence
> detects a *potential* conflict

The following also causes a error:

```less
div {
  .m(@x) when (default())    {default:     @x} // (1)
  .m(@x) when not(default()) {not-default: @x} // (2)
  .m(3)                      {case-3:       3} // (3)

  .m(3); // Error
}
```
Although there's no direct conflict with `.m(3);` since (1) and (2) do not interfere because of (3), the whole mixin family is interpreted as erroneous (basically, it is the same error as in previous example).

And finally, here's advanced *correct* "multiple `default()` calls" usage (not too practical perhaps, but to illustrate why this is allowed at all):

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
result:

```less
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
[And more examples in included tests...](https://github.com/seven-phases-max/less.js/blob/mutually-exclusive-guards/test/less/mixins-guards-default-func.less)