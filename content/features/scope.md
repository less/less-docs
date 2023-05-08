
> Some additional scoping features of Less

## Mixin scope features

Intuitively, mixins have access to definition scope.

```less
#ns {
  @a: one;
  .mixin-1() {
    prop: @a;
  }
}
.rule {
  #ns.mixin-1();
}

/* OUTPUTS:
.rule {
  prop: one;
}
*/
```
### Deprecated mixin scope features

This is a list of mixin scope features that may be removed in future releases.

#### #1. (DEPRECATED) Mixins have access to caller scope.

```less
#ns {
  .mixin-1() {
    prop: @a;
  }
}
.rule {
  @a: one;
  #ns.mixin-1();
}
/* OUTPUTS:
.rule {
  prop: one;
}
*/
```
This is counter-intuitive because:
1. It is not typical in most other languages.
2. It's not immediately obvious when looking at the definition what output will be produced by the mixin.

**Preferred approach**: Pass in the variable you want to be visible to the mixin.
```less
#ns {
  .mixin-1(@a) {
    prop: @a;
  }
}
.rule {
  #ns.mixin-1(@a: one);
}
```
#### #2. (DEPRECATED) The caller scope has access to variables from the mixin

Mixins will push their variables into the caller scope, but _only_ if the variable is not locally defined.

```less
#ns {
  .mixin-1() {
    @a: one;
    @b: two;
  }
}
.rule {
  @b: three;
  #ns.mixin-1();
  prop-1: @a;
  prop-2: @b;
}
/* OUTPUTS:
.rule {
  prop-1: one;
  prop-2: three;
}
*/
```
This is counter-intuitive because:
1. A variable higher in the caller scope can be overridden.
2. It's also not a typical language behavior.
3. It differs from the behavior of detached rulesets.

Also, with the introduction of Maps, you can retrieve variable values (and mixins) directly.

**Preferred approach**:
```less
#ns {
  .mixin-1() {
    @a: one;
    @b: two;
  }
}
.rule {
  @returns: #ns.mixin-1();
  prop-1: @returns[@a];
  prop-2: @returns[@b];
}
/* OUTPUTS:
.rule {
  prop-1: one;
  prop-2: two;
}
*/
```
#### #3. (DEPRECATED) The caller scope has access to mixins from the mixin

Similarly to deprecated variable behavior, mixins are also pushed into the caller scope. However, unlike variables, mixins with the same name as the merged scope mixin are merged.

```less
#ns {
  .mixin-1() {
    prop-1: one;
    prop-2: two;
  }
}
.rule {
  #ns();
  .mixin-1();
  .mixin-1() {
    prop-3: three;
  }
}
/* OUTPUT:
.rule {
  prop-1: one;
  prop-2: two;
  prop-3: three;
}
*/
```

**Preferred approach**: Call mixins directly.

```less
#ns {
  .mixin-1() {
    prop-1: one;
    prop-2: two;
  }
}
.rule {
  .mixin-1() {
    prop-3: three;
  }
  #ns.mixin-1();
  .mixin-1();
}
/* OUTPUT:
.rule {
  prop-1: one;
  prop-2: two;
  prop-3: three;
}
*/
```


## Tips & Tricks

Credit: [less/less.js/issues/1472](http://github.com/less/less.js/issues/1472#issuecomment-22213697)

Here is a trick for defining variables and keeping them in some private scope, preventing them from leaking to the global space.

```less
& {
  // Vars
  @height: 100px;
  @width: 20px;
  // Don't define any prop:value on this scope (as doing so will generate (wrong) output).

  .test {
    height: @height;
    width: @width;
  }
}

.rest {
  height: @height; // Name error: variable @height is undefined
}
```

Here, `@height` and `@width` are only defined for the scope created by `& { ... }` You can also nest an scope inside a rule:

```less
.some-module {
  @height: 200px;
  @width: 200px;
  text-align: left;
  line-height: @height; // 200px

  & {
    // Override original values
    @height: 100px;
    @width: auto;

    .some-module__element {
      height: @height; // 100px
      width: @width; // 200px
    }

    .some-module__element .text {
      line-height: (@height / 2); // 50px
    }
  }

  & {
    // Override original values
    @height: 50px;

    .some-module__another-element {
      height: @height; // 50px
      width: @width; // 200px
    }

    .some-module__another-element .text {
      line-height: (@height / 2); // 25px
    }
  }
}
```