## Contributing to the Documentation

**Formatting Standards**

For consistency across all examples in the docs and to ensure that our code examples are readable, please follow these guidelines when contributing:

* Four spaces for indentation, and always use proper indentation
* Multiple-line formatting (one property and value per line)
* Double quotes only, never single quotes
* Always put a space after a property's colon (.e.g, `display: block;` and not `display:block;`)
* End all lines with a semi-colon
* For multiple, comma-separated selectors, place each selector on its own line
* Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes. This is important to do in your own code as well for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks)
* When using HTML in your examples, use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags with _no trailing slash_)
* All page files should have globally unique names regardless of where they are located in the repository

### Capitalization

#### In Titles: Do Capitalize

* Nouns (man, bus, book)
* Adjectives (angry, lovely, small)
* Verbs (run, eat, sleep)
* Adverbs (slowly, quickly, quietly)
* Pronouns (he, she, it)
* Subordinating conjunctions (as, because, that)

#### In Titles: Do Not Capitalize

* Articles: a, an, the
* Coordinating Conjunctions: and, but, or, for, nor, etc.
* Prepositions: on, at, to, from, by, etc.

## Tools

### Assemble

* Visit [Assemble's documentation](http://assemble.io/docs/) site to learn more about customization and configuration.
* Markdown: [Markdown Cheatsheet](http://assemble.io/docs/Cheatsheet-Markdown.html)

## Coding Style

Examples:

**Good**

```css
body {
  padding-top: 80px;
  font-size: 12px;
}
```

**Bad**

```css
body {
padding-top: 80px;
font-size: 12px;
}
```

**Bad**

```css
body { padding-top: 80px; font-size: 12px }
```

### Feature Requests, Bugs and Pull Requests

* If you would like to request a feature, suggest an improvement, or report a bug, please [submit an Issue]({{ site.codeissues }}).
* Feature requests are more likely to get attention if you include a clearly-described use case.
