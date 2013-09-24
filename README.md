# lesscss.org

> Official website and documentation for LESS/Less.js

## The Plan

First, clean up and organize all of the documentation in the [content](./content) directory. This means:

* Consistent naming conventions for files, consistent coding styles in documents
* Organize information and favor individual files for sections of content, rather than long documents

## Contributing

### Coding Style

#### Markdown standards

* Use `#` for titles, not underlines. Underlines aren't as flexible and aren't as clear in code highlighters
* In headings, always add a space between the `#` and the text
* Wrap inline code with a single backtick, wrap blocks of code with three backticks (code fences).
* With code blocks, always use the correct language after to the first code fence so that our documentation is more likely to show up in search results. We know that GitHub does not properly highlight LESS, but please use `` ```less `` instead of  `` ```css `` anyway.

For _consistency and readability_ across all examples in the documentation, we ask that you please conform these guidelines when contributing:

#### LESS standards

* Two spaces for indentation, never tabs, and always use proper indentation
* Multiple-line formatting (one property and value per line)
* For multiple, comma-separated selectors, place each selector on it's own line
* Double quotes only, never single quotes
* Always a space after a property's colon (.e.g, `display: block;` and not `display:block;`)
* End _all_ lines with a semi-colon
* Attribute selectors, like `input[type="text"]` should always wrap the attribute's value in double quotes. This is important to do in your own code as well, for consistency and safety (see this [blog post on unquoted attribute values](http://mathiasbynens.be/notes/unquoted-attribute-values) that can lead to XSS attacks).
* When HTML is in your examples, use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags with no trailing slash)
* All page files should have globally unique names regardless of where they are located in the repository.

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

* If you would like to request a feature, suggest an improvement, or report a bug, please [submit an Issue](https://github.com/cloudhead/less.js/issues?state=open).
* Feature requests are more likely to get attention if you include a clearly described use case.
* If you wish to submit a pull request, please [read this first](https://github.com/cloudhead/less.js/blob/master/CONTRIBUTING).md.

## Tools

The documentation site is generated using [Assemble](http://assemble.io) and [Grunt.js](http://gruntjs.com). Please visit those respective projects to learn more about usage and customization.

## Todo

* Add grunt-github-api to sync changelog from main site
* Add grunt-readme


## License
Copyright (c) 2013, Less.js Core Team, Contributors
Documentation released under the [MIT License](./LICENSE-MIT).