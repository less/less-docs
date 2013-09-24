---
title: extend
published: false
---

## Overview

```css
nav ul {
  &:extend(.inline);
  background: blue;
}
```
In the rule set above, the `:extend` selector will apply the "extending selector" (`nav ul`) along with its entire declaration block onto the `.inline` class _wherever the `.inline` class appears_.

So the following:

```css
.inline {
  color: red;
}
```
would compile to:

```css
.inline,
nav ul {
  color: red;
  background: blue;
}
```

Also when the `.inline` class is part of a selector, like this:

```css
.inline p {
  color: red;
}
```
would compile to:

```css
.inline p,
nav ul p {
  color: red;
}
```

This makes sense because `.inline p` is the selector, not just `.inline`.

```css
ul.inline li {
  display: inline-block;
}
```


### Property ordering

The _extending_ Selector

```css
.alert:extend(.alert-info, .alert-danger, .alert-error, .alert-success) {
  padding: 8px 35px 8px 14px;
  margin-bottom: @baseLineHeight;
  text-shadow: 0 1px 0 rgba(255,255,255,.5);
  background-color: @warningBackground;
  border: 1px solid @warningBorder;
  .border-radius(@baseBorderRadius);
  color: @warningText;
}
```
Is applied to all _extended_ selectors:

```css
.alert-info {
  &:extend(.inline, .row, .box, .block, .widget, .nav, .navbar, .etc);
  background: blue;
}
```


## Use Cases

> Examples for when "extend" will be valuable, and when it won't

The purpose of this section is to better understand how the ```:extend``` feature _ought_ be used, thinking in terms of best practices, in order to help prioritize development decisions, and to qualify or disqualify feature requests related to this feature.


### Repetitious Code

The `:extend` feature seems to hold the most promise as a device for:

1. Selector Inheritance: which means you can add the styles of one selector to other selectors, but without having to manually _hunt down and directly edit_ each of the selectors you wish to extend. Clearly, this is advantageous at the time of need, but it's also helpful with code maintenance.
2.

`:extend` directive to a selector (or ruleset of a selector) allows you to add the styles of that selector to any other selectors,


```css
.widget {
  &:extend(ul li, .blob, .kitchensink, .sanity, .willtolive, .questions, .etc);
  background: blue;
}
```


```css
.widget {
  &:extend(.answers, .blob, .kitchensink, .sanity, .willtolive, .nav, .navbar, .etc);
  background: blue;
}
```

## Extends with Mixins
```
.clearfix():extend() {
  // declarations
}
```


# Best Practices

## Extend Base Classes to Modifiers

A common use case is to apply ```:extend``` to a "base class" so that related "modifier" classes will inherit the styles of the base class. Using [Bootstrap](http://twitter.github.com/bootstrap/) as an example, we might be inclined to extend the base ```.alert``` class like this:

```css
.alert:extend(.alert-info, .alert-warning, .alert-success) {
  // declarations
}
```
Now, we have achieved

### Advantages

 * You no longer have to apply multiple ```.alert``` classes to your HTML
 * Consolidated management and control over styles that require consistent implementation, as with @variables and .mixins

### Disadvantages

 * semantics?
 *  more repetition of compiled styles, resulting a bigger CSS file,

### The Good, Bad and Ugly


TODO...

```css
.font-size-12 {
  &:extend(.inline, .row, .box, .block, .widget, .nav, .navbar, .etc);
  font-size: 12px;
}
```


```css
.blue {
  &:extend(.inline, .row, .box, .block, .widget, .nav, .navbar, .etc);
  background: blue;
}
```

#Extends, Mixins, "Empty" Mixins, and Placeholders

Scope and Directives

You can only :extend selectors within the same `directive`, but you can :extend selectors within _any_ `scope`.

We want :extend to make our lives easier by DRYing up our stylesheets, but only when :extend cannot "pierce the context barrier" of the selector you wish to extend. So within the same context the goal is to prevent  order to prevent :extend from poluting styles
