---
published: false
---

> How variables are evaluated

## Tips & Tricks

Credit: [less/less.js/issues/1472]({{ site.coderepo }}/issues/1472#issuecomment-22213697)

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