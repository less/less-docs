<a id="color"></a>
## color

> Parses a color, so a string representing a color becomes a color.

Parameters: `string`: a string of the specifid color.

Example: `color("#aaa");`
Output: `#aaa`


<a id="math-unit"></a>
## unit

> Remove or change the unit of a dimension
Parameters:

* `dimension`: A number, with or without a dimension.
* `unit`: (Optional) the unit to change to, or if omitted it will remove the unit.

Example: `unit(5, px)`
Output: `5px`

Example: `unit(5em)`
Output: `5`


<a id="data-uri"></a>
## data-uri

> Inlines a resource and falls back to `url()` if the ieCompat option is on and the resource is too large, or if you use the function in the browser. If the mime is not given then node uses the mime package to determine the correct mime type.
Parameters:

* `mimetype`: (Optional) A mime type string.
* `url`: The URL of the file to inline.

Example: `data-uri('../data/image.jpg');`
Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`
Output in browser: `url('../data/image.jpg');`

Example: `data-uri('image/jpeg;base64', '../data/image.jpg');`
Output: `url('data:image/jpeg;base64,bm90IGFjdHVhbGx5IGEganBlZyBmaWxlCg==');`
