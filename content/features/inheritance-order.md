Use Cases for Extends
---------------------

##Selector Pattern

```E:extend(s)``` - an E element that will add itself and it's declarations to, simple selector s.

##Terminology

Extend_ing_ Selectors
```E:extend```

Extend_ed_ Selectors
```(.one, .two)```



#To Prepend or Append? Selectors and Rulesets

##Prepend or Append Selectors?

When considered from the perspective of how this might impact rendering or performance in the browser, determining how _Extending_ selectors are placed alongside their _Extended_ selectors is probably immaterial - because the order of selectors within a ruleset is arbitrary to browsers and the rule set will be processed the same either way. However, it _might_ be worth giving this more thought if there is a desire to achieve continuity or consistency with how similar or related features are implemented.

For example, while the following may be arbitrary from the context of browsers:

###Prepending Extended Selectors

In this example, _Extending_ selectors are *prepended* to _Extended_ selectors, so that:

```css
// extending selector
.red:extend(.blue) {
  // declarations
}
```
compiles to:

```css
.red, .blue {
  // declarations
}
```

###Appending Extended Selectors

And here, _Extending_ selectors are *appended* to _Extended_ selectors, so that:

```css
// extending selector
.red:extend(.blue) {
  // declarations
}
```
compiles to:

```css
.blue, .red {
  // declarations
}
```


##Prepend or Append Ruleset?



* Declaration blocks from _Extending_ selectors are *prepended* to the declaration blocks of _Extended_ selectors. So:

```css
// extending selector
.red:extend(.blue) {
  z-index: 1;
}
// extended selector
.blue:extend(.blue) {
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
