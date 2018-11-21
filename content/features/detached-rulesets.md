> Assign a ruleset to a variable

Released [v1.7.0]({{ less.master.url }}CHANGELOG.md)

A detached ruleset is a group of css properties, nested rulesets, media declarations or anything else stored in a variable. You can include it into a ruleset or another structure and all its properties are going to be copied there. You can also use it as a mixin argument and pass it around as any other variable.

Simple example:
````less
// declare detached ruleset
@detached-ruleset: { background: red; }; // semi-colon is optional in 3.5.0+

// use detached ruleset
.top {
    @detached-ruleset(); 
}
````

compiles into:
````css
.top {
  background: red;
}
````

Parentheses after a detached ruleset call are mandatory (except when followed by a [lookup value](#detached-rulesets-feature-property-variable-accessors)). The call `@detached-ruleset;` would not work.

It is useful when you want to define a mixin that abstracts out either wrapping a piece of code in a media query or a non-supported browser class name. The rulesets can be passed to mixin so that the mixin can wrap the content, e.g.

```less
.desktop-and-old-ie(@rules) {
  @media screen and (min-width: 1200px) { @rules(); }
  html.lt-ie9 &                         { @rules(); }
}

header {
  background-color: blue;

  .desktop-and-old-ie({
    background-color: red;
  });
}
```

Here the `desktop-and-old-ie` mixin defines the media query and root class so that you can use a mixin to wrap a piece of code. This will output

```css
header {
  background-color: blue;
}
@media screen and (min-width: 1200px) {
  header {
    background-color: red;
  }
}
html.lt-ie9 header {
  background-color: red;
}
```

A ruleset can be now assigned to a variable or passed in to a mixin and can contain the full set of Less features, e.g.

```less
@my-ruleset: {
    .my-selector {
      background-color: black;
    }
  };
```

You can even take advantage of [media query bubbling](#features-overview-feature-media-query-bubbling-and-nested-media-queries), for instance

```less
@my-ruleset: {
    .my-selector {
      @media tv {
        background-color: black;
      }
    }
  };
@media (orientation:portrait) {
    @my-ruleset();
}
```

which will output

```css
@media (orientation: portrait) and tv {
  .my-selector {
    background-color: black;
  }
}
```

A detached ruleset call unlocks (returns) all its mixins into caller the same way as mixin calls do. However, it does **not** return variables.

Returned mixin:
````less
// detached ruleset with a mixin
@detached-ruleset: { 
    .mixin() {
        color: blue;
    }
};
// call detached ruleset
.caller {
    @detached-ruleset(); 
    .mixin();
}
````

Results in:
````css
.caller {
  color: blue;
}
````

Private variables:
````less
@detached-ruleset: { 
    @color:blue; // this variable is private
};
.caller {
    color: @color; // syntax error
}
````

## Scoping
A detached ruleset can use all variables and mixins accessible where it is *defined* and where it is *called*. Otherwise said, both definition and caller scopes are available to it. If both scopes contains the same variable or mixin, declaration scope value takes precedence. 

*Declaration scope* is the one where detached ruleset body is defined. Copying a detached ruleset from one variable into another cannot modify its scope. The ruleset does not gain access to new scopes just by being referenced there.

Lastly, a detached ruleset can gain access to scope by being unlocked (imported) into it.

_Note: unlocking variables into scope via a called mixin is deprecated. Use [property / variable accessors](#detached-rulesets-feature-property-variable-accessors)._

#### Definition and Caller Scope Visibility
A detached ruleset sees the caller's variables and mixins:

````less
@detached-ruleset: {
  caller-variable: @caller-variable; // variable is undefined here
  .caller-mixin(); // mixin is undefined here
};

selector {
  // use detached ruleset
  @detached-ruleset(); 

  // define variable and mixin needed inside the detached ruleset
  @caller-variable: value;
  .caller-mixin() {
    variable: declaration;
  }
}
````

compiles into:
````css
selector {
  caller-variable: value;
  variable: declaration;
}
````

Variable and mixins accessible from definition win over those available in the caller:
````less
@variable: global;
@detached-ruleset: {
  // will use global variable, because it is accessible
  // from detached-ruleset definition
  variable: @variable; 
};

selector {
  @detached-ruleset();
  @variable: value; // variable defined in caller - will be ignored
}
````

compiles into:
````css
selector {
  variable: global;
}
````

#### Referencing *Won't* Modify Detached Ruleset Scope
A ruleset does not gain access to new scopes just by being referenced there:
````less
@detached-1: { scope-detached: @one @two; };
.one {
  @one: visible;
  .two {
    @detached-2: @detached-1; // copying/renaming ruleset 
    @two: visible; // ruleset can not see this variable
  }
}

.use-place {
  .one > .two(); 
  @detached-2();
}
````

throws an error:
````
ERROR 1:32 The variable "@one" was not declared.
````

#### Unlocking *Will* Modify Detached Ruleset Scope
A detached ruleset gains access by being unlocked (imported) inside a scope:
````less
#space {
  .importer-1() {
    @detached: { scope-detached: @variable; }; // define detached ruleset
  }
}

.importer-2() {
  @variable: value; // unlocked detached ruleset CAN see this variable
  #space > .importer-1(); // unlock/import detached ruleset
}

.use-place {
  .importer-2(); // unlock/import detached ruleset second time
   @detached();
}
````

compiles into:
````css
.use-place {
  scope-detached: value;
}
````


## Property / variable accessors
#### (Lookup values)

_Released [v3.5.0]({{ less.master.url }}CHANGELOG.md)_

Starting in Less 3.5, you can use property/variable accessors (also called "lookups") to select a value from variable (detached) rulesets.

```less
@config: {
  option1: true;
  option2: false;
}

.mixin() when (@config[option1] = true) {
  selected: value;
}

.box {
  .mixin();
}
```
Outputs:
```css
.box {
  selected: value;
}
```

If what is returned from a lookup is another detached ruleset, you can use a second lookup to get that value.

```less
@config: {
  @colors: {
    primary: blue;
  }
}

.box {
  color: @config[@colors][primary];
}
```

#### Variable variables in lookups

The lookup value that is returned can itself be variable. As in, you can write:

```less
@config: {
  @dark: {
    primary: darkblue;
  }
  @light: {
    primary: lightblue;
  }
}

.box {
  @lookup: dark;
  color: @config[@@lookup][primary];
}
```
This will output:

```less
.box {
  color: darkblue;
}
```