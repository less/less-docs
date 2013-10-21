# Extend

> This document describes the rules and expected behavior of the `:extend` Pseudo-Class for the LESS language.

Introduced: <kbd>0.1.4</kbd>

## Selector Pattern

`E:extend(s)` - an E element that will add itself and it's declarations to simple selectors.

## Terminology

Extending Selectors
`E:extend`

Extended Selectors
`(.one, .two)`


## Rules

* Only Simple may be extended. `(.one, .two)` is valid, while `(ul li)` is not
* Extended selectors are **prepended** to _extended_ selectors. So:

```less
// Extending selector
.red:extend(.blue) {
  // declarations
}
```
compiles to:

```css
.red, .blue {
  /* declarations */
}
```

Declaration blocks from _Extended_ selectors are **prepended** to the declaration blocks of _extended_ selectors. So:

```less
// Extending selector
.red:extend(.blue) {
  z-index: 1;
}
// Extended selector
.blue {
  position: relative;
}
```
compiles to:

```css
.red, .blue {
  z-index: 1;
  position: relative;
}
```


## Empty directives

```less
.red:extend() {
  // declarations
}
```
In the above example, the `:extend` directive will simply be ignored and passed over by the compiler.


```css
.red:extend(.blue) {
  // declarations
}
```


```
.one, .two {
  // declarations
}
```


```
.red, .blue {
  // declarations
}
```

## Simple Selectors


```css
// Extending Selector
.alert:extend(.alert-info) {
  // declarations
}
```
Compiles to this:

```css
// Extended Selector
.alert, .alert-info {
  // declarations
}
```

## Grouped Selectors

No different than simple

This:

```css
// Extending selector
.alert:extend(.alert-info) {
  // declarations
}
```

compiles to:

```css
// Extended selector
.widget, .alert, .alert-info {
  // declarations
}
```

### Duplication Detection

```css
// Extending selector
.alert:extend(.alert-info, .widget) {
  // declarations
}
```

Should _not_ compile to:

```css
// Extended selector
.alert, .widget, .alert, .alert-info {
  // declarations
}
```

This is the _desired result:_

```css
// Extended selector
.alert, .widget, .alert-info {
  // declarations
}
```

Notice that the Extending selector was grouped before the Extended selector. This was chosen not for stylistic reasons, but to be behaviorally consistent with the expected order of inherited declarations within the block.


Specificity
Order of Inherited Declarations
Mixins
Scope (always global)
Contexts (Directives (@media))


Selectors
  Type Selectors
  Simple Selectors
Combinators
Pseudo-Elements


### Prefixed Selectors
Prefixed Selectors use an application-specific prefix to ensure that the styles within the declaration block are only applied to the desired application.


### Hacks

TBC...