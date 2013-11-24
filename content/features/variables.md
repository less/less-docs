<a id="variables" class="section_anchor"></a>

# Variables
> Control commonly used values in a single location.

It's not uncommon to see the same value repeated dozens _if not hundreds of times_ across your stylesheets:

```css
a, .link {
  color: #428bca;
}
.widget {
  color: #fff;
  background: #428bca;
}
```

Variables make your code easier to maintain by giving you a way to control those values from a single location:

```less
// Variables
@link-color:        #428bca; // sea blue
@link-color-hover:  (@link-color, 10%);

// Usage
a, .link {
  color: @link-color;
}
a:hover {
  color: @link-color-hover;
}
.widget {
  color: #fff;
  background: @link-color;
}
```

<a id="variable-interpolation"></a>
## Variable Interpolation

The examples above focused on using variables to control _values in CSS rules_, but they can also be used in other places as well, such as selector names, URLs and `@import` statements.

### Selectors

`example.less`

``` less
// Variables
@mySelector:   banner;


// Usage
.@{mySelector} {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```
Compiles to:

``` css
.banner {
  font-weight: bold;
  line-height: 40px;
  margin: 0 auto;
}
```

### URLs

```less
// Variables
@images:      "../img";


// Usage
body {
  color: #444;
  background: url("@{images}}/white-sand.png");
}
```

### `@import` statements (limited support)

Syntax: `@import "@{themes}/tidal-wave.less";`

Note that currently, only variables which have been declared in the root or current scope will be considered and that only the current file and calling files will be considered when looking for a variable.
This means that this usage is typically limited to when you an inject a variable into the compile process or define a variable at the beginning of your root file.

When you are importing a css file and not using the inline option (e.g. the import statement will be kept intact) then the above does not apply.

Example:

``` less
// Variables
@themes: "../../src/themes";

// Usage
@import "@{themes}/tidal-wave.less";
```

Version: 1.4.0

### Properties

<span class="warning">Under consideration</span>

As of v1.5.0, variables **cannot** be used on  _CSS properties_ themselves, so this is not possible:

``` less
.widget {
  .@{myProperty}: #fff;
}
```
There have been requests for this feature, if you wish to add your vote to this request you can do so on the [GitHub Issues for Less.js]().

## Variable Names

It is also possible to define variables with a variable name:

    @fnord:  "I am fnord.";
    @var:    "fnord";
    content: @@var;

Which compiles to:

    content: "I am fnord.";

When defining a variable twice, the last definition of the variable is used, searching from the current scope upwards. This is similar to css itself where the last property inside a definition is used to determine the value.

For instance:

    @var: 0;
    .class1 {
      @var: 1;
      .class {
        @var: 2;
        three: @var;
        @var: 3;
      }
      one: @var;
    }

Compiles to:

    .class1 .class {
      three: 3;
    }
    .class {
      one: 1;
    }

## Tip

> Variables are lazy loaded and do not have to be declared before being used.

Valid less snippet:

    lazy-eval {
      width: @var;
    }

    @var: @a;
    @a: 9%;

this is valid less too:

    .lazy-eval-scope {
      width: @var;
      @a: 9%;
    }

    @var: @a;
    @a: 100%;

both compile into:

    .lazy-eval-scope {
      width: 9%;
    }
