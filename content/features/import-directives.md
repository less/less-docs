# Import Options

LESS offers several extensions to the CSS `@import` directive to provide more flexibility over what you can do with external files.

Syntax: `@import (keyword) "filename";`

The following import directives have been implemented:

* `reference`:
* `once`:
* `inline`:
* `less`:
* `css`:
* `multiple`:

## reference

> Use `@import (reference)` to import external files, but without adding the imported styles to the compiled output unless referenced.

Status: released [v1.5.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)

Example: `@import (reference) "foo.less";`

`reference` is one of the most powerful features in the LESS language. Imagine that `reference` marks every directive and selector with a _reference flag_ in the imported file, imports as normal, but when the CSS is generated, "reference" selectors (as well as any media queries containing only reference selectors) are not output. `reference` styles will not show up in your generated CSS unless the reference styles are used as [[mixin|Mixins]] or [[extended|Extend]].

Additionally, **`reference`** produces different results depending on which method was used (mixin or extend):

* **[[extend|Extends]]**: When a selector is extended, only the new selector is marked as _not reference_, and it is pulled in at the position of the reference `@import` statement.
* **[[mixin|Mixins]]**: When a `reference` style is used as an [[implicit mixin|Mixins]], its rules are are mixed-in, marked "not reference", and appear in the referenced place as normal.

### reference example

This allows you to pull in only specific, targeted styles from a library such as [Bootstrap](https://github.com/twbs/bootstrap) by doing something like this:

```less
.navbar:extend(.navbar all) {}
```

And you will pull in only `.navbar` related styles from Bootstrap.


## inline

> Use `@import (inline)` to concatenate external files, but don't include the imported styles in the compiled output unless referenced.

Status: released [v1.4.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)

Example: `@import (inline) "foo.less";`


## less

> Use `@import (less)` to treat imported files as LESS, regardless of file extension.

Status: released [v1.4.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)

Example: `@import (less) "foo.css";`


## css

> Use `@import (css)` to treat imported files as regular CSS, regardless of file extension.

Status: released [v1.4.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)

Example: `@import (css) "foo.less";`


## once

> The default behavior of `@import` statements.

Status: released [v1.4.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)

This option is automatically enabled by default on all `@import` statements.


## multiple

> Use `@import (multiple)` to allow importing of multiple files with the same name.

Status: released [v1.4.0](https://github.com/cloudhead/less.js/blob/master/CHANGELOG.md)
