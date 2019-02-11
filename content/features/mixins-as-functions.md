> Selecting properties and variables from mixin calls

#### Property / value accessors

_Released [v3.5.0]({{ less.master.url }}CHANGELOG.md)_

Starting in Less 3.5, you can use property/variable accessors to select a value from an evaluated mixin's rules. This can allow you to use mixins similar to functions.

Example:

```less
.average(@x, @y) {
  @result: ((@x + @y) / 2);
}

div {
  // call a mixin and look up its "@result" value
  padding: .average(16px, 50px)[@result];
}
```

Results in:

```css
div {
  padding: 33px;
}
```

#### Overriding mixin values

If you have multiple matching mixins, all rules are evaluated and merged, and the last matching value with that identifier is returned. This is similar to the cascade in CSS, and it allows you to "override" mixin values.

```less
// library.less
#library() {
  .mixin() {
    prop: foo;
  }
}

// customize.less
@import "library";
#library() {
  .mixin() {
    prop: bar;
  }
}

.box {
  my-value: #library.mixin[prop];
}
```
Outputs:
```css
.box {
  my-value: bar;
}
```

#### Unnamed lookups

If you don't specify a lookup value in `[@lookup]` and instead write `[]` after a mixin or ruleset call, _all_ values will cascade and the last declared value will be selected.

Meaning: the averaging mixin from the above example could be written as:
```less
.average(@x, @y) {
  @result: ((@x + @y) / 2);
}

div {
  // call a mixin and look up its final value
  padding: .average(16px, 50px)[];
}
```
The output is the same:
```css
div {
  padding: 33px;
}
```

The same cascading behavior is true for rulesets or variables aliased to mixin calls.
```less
@dr: {
  value: foo;
}
.box {
  my-value: @dr[];
}
```
This outputs:
```css
.box {
  my-value: foo;
}
```


#### Unlocking mixins & variables into caller scope

***DEPRECATED - Use Property / Value Accessors***

Variables and mixins defined in a mixin are visible and can be used in caller's scope. There is only one exception: a variable is not copied if the caller contains a variable with the same name (that includes variables defined by another mixin call).  Only variables present in callers local scope are protected. Variables inherited from parent scopes are overridden.

_Note: this behavior is deprecated, and in the future, variables and mixins will not be merged into the caller scope in this way._

Example:

```less
.mixin() {
  @width:  100%;
  @height: 200px;
}

.caller {
  .mixin();
  width:  @width;
  height: @height;
}

```
Results in:

```css
.caller {
  width:  100%;
  height: 200px;
}
```

Variables defined directly in callers scope cannot be overridden. However, variables defined in callers parent scope is not protected and will be overridden:
````less
.mixin() {
  @size: in-mixin;
  @definedOnlyInMixin: in-mixin;
}

.class {
  margin: @size @definedOnlyInMixin;
  .mixin();
}

@size: globaly-defined-value; // callers parent scope - no protection
````

Results in:
````css
.class {
  margin: in-mixin in-mixin;
}
````

Finally, mixin defined in mixin acts as return value too:
````less
.unlock(@value) { // outer mixin
  .doSomething() { // nested mixin
    declaration: @value;
  }
}

#namespace {
  .unlock(5); // unlock doSomething mixin
  .doSomething(); //nested mixin was copied here and is usable
}
````

Results in:
````css
#namespace {
  declaration: 5;
}
````
