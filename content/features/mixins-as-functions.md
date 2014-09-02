> Return variables or mixins from mixins

Variables and mixins defined in a mixin are visible and can be used in caller's scope. There is only one exception, variable is not copied if the caller contains a variable with the same name (that includes variables defined by another mixin call).  Only variables present in callers local scope are protected. Variables inherited from parent scopes are overridden.

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

Thus variables defined in a mixin can act as its return values. This allows us to create a mixin that can be used almost like a function.

Example:

```less
.average(@x, @y) {
  @average: ((@x + @y) / 2);
}

div {
  .average(16px, 50px); // "call" the mixin
  padding: @average;    // use its "return" value
}
```

Results in:

```css
div {
  padding: 33px;
}
```

Variable defined directly in callers scope can not be overriden. However, variable defined in callers parent scope is not protected and will be overriden:
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

>>>>>>> f945fa6948c69b5a84e402bc8eb8b2ead2735cfa
