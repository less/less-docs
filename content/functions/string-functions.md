### escape

> Applies [URL-encoding](http://en.wikipedia.org/wiki/Percent-encoding) to special characters found in the input string.

* These characters are not encoded: `,`, `/`, `?`, `@`, `&`, `+`, `'`, `~`, `!` and `$`.
* Most common encoded characters are: `\<space\>`, `#`, `^`, `(`, `)`, `{`, `}`, `|`, `:`, `>`, `<`, `;`, `]`, `[` and `=`.

Parameters: `string`: a string to escape.

Returns: escaped `string` content without quotes.

Example:

```less
escape('a=1')
```

Output:

```css
a%3D1
```

Note: if the parameter is not a string, output is not defined. The current implementation returns `undefined` on color and unchanged input on any other kind of argument. This behavior should not be relied on and may change in the future.


### e

> String escaping.

It expects string as a parameter and return its content as is, but without quotes. It can be used to output CSS value which is either not valid CSS syntax, or uses proprietary syntax which Less doesn't recognize.

Parameters: `string` - a string to escape.

Returns: `string` - the escaped string, without quotes.

Example:

```less
@mscode: "ms:alwaysHasItsOwnSyntax.For.Stuff()" 
filter: e(@mscode);
```

Output:

```css
filter: ms:alwaysHasItsOwnSyntax.For.Stuff();
```


### % format

> The function `%(string, arguments ...)` formats a string.

The first argument is string with placeholders. All placeholders start with percentage symbol `%` followed by letter `s`,`S`,`d`,`D`,`a`, or `A`. Remaining arguments contain expressions to replace placeholders. If you need to print the percentage symbol, escape it by another percentage `%%`.

Use uppercase placeholders if you need to escape special characters into their utf-8 escape codes.
The function escapes all special characters except `()'~!`. Space is encoded as `%20`. Lowercase placeholders leave special characters as they are.

Placeholders:
* `d`, `D`, `a`, `A` - can be replaced by any kind of argument (color, number, escaped value, expression, ...). If you use them in combination with string, the whole string will be used - including its quotes. However, the quotes are placed into the string as they are, they are not escaped by "/" nor anything similar.
* `s`, `S` - can be replaced by any expression. If you use it with string, only the string value is used - quotes are omitted.

Parameters:

* `string`: format string with placeholders,
* `anything`* : values to replace placeholders.

Returns: formatted `string`.

Example:

```less
format-a-d: %("repetitions: %a file: %d", 1 + 2, "directory/file.less");
format-a-d-upper: %('repetitions: %A file: %D', 1 + 2, "directory/file.less");
format-s: %("repetitions: %s file: %s", 1 + 2, "directory/file.less");
format-s-upper: %('repetitions: %S file: %S', 1 + 2, "directory/file.less");
```
Output:

```css
format-a-d: "repetitions: 3 file: "directory/file.less"";
format-a-d-upper: "repetitions: 3 file: %22directory%2Ffile.less%22";
format-s: "repetitions: 3 file: directory/file.less";
format-s-upper: "repetitions: 3 file: directory%2Ffile.less";
```


### replace

> Replaces a text within a string.

Released [v1.7.0]({{ less.master.url }}CHANGELOG.md)

Parameters:

* `string`: The string to search and replace in.
* `pattern`: A string or regular expression pattern to search for.
* `replacement`: The string to replace the matched pattern with.
* `flags`: (Optional) regular expression flags.

Returns: a string with the replaced values.

Example:

```less
replace("Hello, Mars?", "Mars\?", "Earth!");
replace("One + one = 4", "one", "2", "gi");
replace('This is a string.', "(string)\.$", "new $1.");
replace(~"bar-1", '1', '2');
```
Result:

```css
"Hello, Earth!";
"2 + 2 = 4";
'This is a new string.';
bar-2;
```
