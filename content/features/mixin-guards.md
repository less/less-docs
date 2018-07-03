Guards are useful when you want to match on _expressions_, as opposed to simple values or arity. If you are familiar with functional programming, you have probably encountered them already.

In trying to stay as close as possible to the declarative nature of CSS, Less has opted to implement conditional execution via **guarded mixins** instead of `if`/`else` statements, in the vein of `@media` query feature specifications.

Let's start with an example:

```less
.mixin(@a) when (lightness(@a) >= 50%) {
  background-color: black;
}
.mixin(@a) when (lightness(@a) < 50%) {
  background-color: white;
}
.mixin(@a) {
  color: @a;
}
```

The key is the `when` keyword, which introduces a guard sequence (here with only one guard). Now if we run the following code:

```less
.class1 { .mixin(#ddd) }
.class2 { .mixin(#555) }
```

Here's what we'll get:

```css
.class1 {
  background-color: black;
  color: #ddd;
}
.class2 {
  background-color: white;
  color: #555;
}
```

#### Guard Comparison Operators

The full list of comparison operators usable in guards are: `>`, `>=`, `=`, `=<`, `<`. Additionally, the keyword `true` is the only truthy value, making these two mixins equivalent:

```less
.truth(@a) when (@a) { ... }
.truth(@a) when (@a = true) { ... }
```

Any value other than the keyword `true` is falsy:

```less
.class {
  .truth(40); // Will not match any of the above definitions.
}
```

Note that you can also compare arguments with each other, or with non-arguments:

```less
@media: mobile;

.mixin(@a) when (@media = mobile) { ... }
.mixin(@a) when (@media = desktop) { ... }

.max(@a; @b) when (@a > @b) { width: @a }
.max(@a; @b) when (@a < @b) { width: @b }
```

#### Guard Logical Operators

You can use logical operators with guards. The syntax is based on CSS media queries.

Use the `and` keyword to combine guards:

```less
.mixin(@a) when (isnumber(@a)) and (@a > 0) { ... }
```

You can emulate the *or* operator by separating guards with a comma `,`. If any of the guards evaluate to true, it's considered a match:

```less
.mixin(@a) when (@a > 10), (@a < -10) { ... }
```

Use the `not` keyword to negate conditions:

```less
.mixin(@b) when not (@b > 0) { ... }
```

#### Type Checking Functions

Lastly, if you want to match mixins based on value type, you can use the `is` functions:

```less
.mixin(@a; @b: 0) when (isnumber(@b)) { ... }
.mixin(@a; @b: black) when (iscolor(@b)) { ... }
```

Here are the basic type checking functions:

* `iscolor`
* `isnumber`
* `isstring`
* `iskeyword`
* `isurl`

If you want to check if a value is in a specific unit in addition to being a number, you may use one of:

* `ispixel`
* `ispercentage`
* `isem`
* `isunit`
