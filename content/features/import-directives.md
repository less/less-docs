# Import Directives
> How to combine files

Standard CSS Import statements may be treated differently by less depending on the file extension. If the file has a css extension, it will be treated as css and the import statement left as-is (see the inline option below). If it has any other extension it will be treated as less and imported.
If it does not have an extension, ".less" will be appended and it will be included as a imported less file.

Example:
```
@import "foo"; // foo.less is imported
@import "foo.less"; // foo.less is imported
@import "foo.php"; // foo.php imported as a less file
@import "foo.css"; // statement left as-is
```

See the options below which can override this behaviour.

# Import Options
> LESS offers several extensions to the CSS `@import` directive to provide more flexibility over what you can do with external files.

Syntax: `@import (keyword) "filename";`

The following import directives have been implemented:

* `reference`: use a less file but do not output it
* `once`: only include the file once (default behaviour)
* `inline`: include the sourcefile in the output but do not process
* `less`: treat the file as a less file, no matter what the file extension
* `css`: treat the file as a css file, no matter what the file extension
* `multiple`: include the file multiple times


## reference
> Use `@import (reference)` to import external files, but without adding the imported styles to the compiled output unless referenced.

Released [v1.5.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

Example: `@import (reference) "foo.less";`

`reference` is one of the most powerful features in the LESS language. Imagine that `reference` marks every directive and selector with a _reference flag_ in the imported file, imports as normal, but when the CSS is generated, "reference" selectors (as well as any media queries containing only reference selectors) are not output. `reference` styles will not show up in your generated CSS unless the reference styles are used as [mixins][] or [extended][].

Additionally, **`reference`** produces different results depending on which method was used (mixin or extend):

* **[extend](#extend)**: When a selector is extended, only the new selector is marked as _not referenced_, and it is pulled in at the position of the reference `@import` statement.
* **[mixins](#mixins)**: When a `reference` style is used as an [[implicit mixin|Mixins]], its rules are are mixed-in, marked "not reference", and appear in the referenced place as normal.

### reference example
This allows you to pull in only specific, targeted styles from a library such as [Bootstrap](https://github.com/twbs/bootstrap) by doing something like this:

```less
.navbar:extend(.navbar all) {}
```

And you will pull in only `.navbar` related styles from Bootstrap.


## inline
> Use `@import (inline)` to include external files, but not process them.

Released [v1.5.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

Example: `@import (inline) "not-less-compatible.css";`

You will use this when a css file may not be less compatible - this is because although less supports most known standards css, it does not support comments in some places and does not support all known css hacks without modifying the css.
So you can use this to include the file in the output so that all css will be in one file.

## less
> Use `@import (less)` to treat imported files as LESS, regardless of file extension.

Released [v1.4.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

Example:

```less
@import (less) "foo.css";
```

## css
> Use `@import (css)` to treat imported files as regular CSS, regardless of file extension. This means the import statement will be left as it is.

Released [v1.4.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

Example:

```less
@import (css) "foo.less";
```
outputs
```less
@import "foo.less";
```


## once
> The default behavior of `@import` statements. It means the file is imported only once and subsequent import statements for that file will be ignored.

Released [v1.4.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

This option is automatically enabled by default on all `@import` statements.

Example:

```less
@import (once) "foo.less";
@import (once) "foo.less"; // this statement will be ignored
```


## multiple
> Use `@import (multiple)` to allow importing of multiple files with the same name. This is the opposite behaviour to once.

Released [v1.4.0](https://github.com/less/less.js/blob/master/CHANGELOG.md)

Example:

```less
// file: foo.less
.a {
  color: green;
}
// file: main.less
@import (once) "foo.less";
@import (once) "foo.less";
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
