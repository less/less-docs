> Import styles from other style sheets

In standard CSS, `@import` at-rules must precede all other types of rules. But Less doesn't care where you put `@import` statements.

Example:

```less
.foo {
  background: #900;
}
@import "this-is-valid.less";
```

## File Extensions
`@import` statements may be treated differently by Less depending on the file extension:

* If the file has a `.css` extension it will be treated as CSS and the `@import` statement left as-is (see the [inline option](#import-options-inline) below).
* If it has _any other extension_ it will be treated as Less and imported.
* If it does not have an extension, `.less` will be appended and it will be included as a imported Less file.

Examples:

```less
@import "foo";      // foo.less is imported
@import "foo.less"; // foo.less is imported
@import "foo.php";  // foo.php imported as a Less file
@import "foo.css";  // statement left in place, as-is
```

The following options can be used to override this behavior.

## Import Options
> Less offers several extensions to the CSS `@import` CSS at-rule to provide more flexibility over what you can do with external files.

Syntax: `@import (keyword) "filename";`

The following import options have been implemented:

* `reference`: use a Less file but do not output it
* `inline`: include the source file in the output but do not process it
* `less`: treat the file as a Less file, no matter what the file extension
* `css`: treat the file as a CSS file, no matter what the file extension
* `once`: only include the file once (this is default behavior)
* `multiple`: include the file multiple times
* `optional`: continue compiling when file is not found

> More than one keyword per `@import` is allowed, you will have to use commas to separate the keywords:

Example: `@import (optional, reference) "foo.less";`

### reference
Use `@import (reference)` to import external files, but without adding the imported styles to the compiled output unless referenced.

Released [v1.5.0]({{ less.master.url }}CHANGELOG.md)

Example: `@import (reference) "foo.less";`

Imagine that `reference` marks every at-rule and selector with a _reference flag_ in the imported file, imports as normal, but when the CSS is generated, "reference" selectors (as well as any media queries containing only reference selectors) are not output. `reference` styles will not show up in your generated CSS unless the reference styles are used as [mixins](#mixins-feature) or [extended](#extend-feature).

Additionally, **`reference`** produces different results depending on which method was used (mixin or extend):

* **[extend](#extend-feature)**: When a selector is extended, only the new selector is marked as _not referenced_, and it is pulled in at the position of the reference `@import` statement.
* **[mixins](#mixins-feature)**: When a `reference` style is used as an [implicit mixin](#mixins-feature), its rules are mixed-in, marked "not reference", and appear in the referenced place as normal.


#### reference example
This allows you to pull in only specific, targeted styles from a library such as [Bootstrap](https://github.com/twbs/bootstrap) by doing something like this:

```less
.navbar:extend(.navbar all) {}
```

And you will pull in only `.navbar` related styles from Bootstrap.


### inline

Use `@import (inline)` to include external files, but not process them.

Released [v1.5.0]({{ less.master.url }}CHANGELOG.md)

Example: `@import (inline) "not-less-compatible.css";`

You will use this when a CSS file may not be Less compatible; this is because although Less supports most known standards CSS, it does not support comments in some places and does not support all known CSS hacks without modifying the CSS.

So you can use this to include the file in the output so that all CSS will be in one file.


### less

Use `@import (less)` to treat imported files as Less, regardless of file extension.

Released [v1.4.0]({{ less.master.url }}CHANGELOG.md)

Example:

```less
@import (less) "foo.css";
```

### css

Use `@import (css)` to treat imported files as regular CSS, regardless of file extension. This means the import statement will be left as it is.

Released [v1.4.0]({{ less.master.url }}CHANGELOG.md)

Example:

```less
@import (css) "foo.less";
```
outputs

```less
@import "foo.less";
```

### once

The default behavior of `@import` statements. It means the file is imported only once and subsequent import statements for that file will be ignored.

Released [v1.4.0]({{ less.master.url }}CHANGELOG.md)

This is the default behavior of `@import` statements.

Example:

```less
@import (once) "foo.less";
@import (once) "foo.less"; // this statement will be ignored
```


### multiple

Use `@import (multiple)` to allow importing of multiple files with the same name. This is the opposite behavior to once.

Released [v1.4.0]({{ less.master.url }}CHANGELOG.md)

Example:

```less
// file: foo.less
.a {
  color: green;
}
// file: main.less
@import (multiple) "foo.less";
@import (multiple) "foo.less";
```
Outputs

```less
.a {
  color: green;
}
.a {
  color: green;
}
```

### optional

Use `@import (optional)` to allow importing of a file only when it exists. Without the `optional` keyword Less throws a FileError and stops compiling when importing a file that can not be found. 

Released [v2.3.0]({{ less.master.url }}CHANGELOG.md)
