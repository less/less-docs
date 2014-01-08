### length

> Returns the number of elements in a value list.

Parameters: `list` - a comma or space separated list of values.
Returns: an integer number of elements in a list

Example: `length(1px solid #0080ff);`
Output: `3`

Example:

```less
@list: "banana", "tomato", "potato", "peach";
n: length(@list);
```

Output:

```
n: 4;
```

### extract

> Returns the value at a specified position in a list.

Parameters:
`list` - a comma or space separated list of values.
`index` - an integer that specifies a position of a list element to return.
Returns: a value at the specified position in a list.

Example: `extract(8px dotted red, 2);`
Output: `dotted`

Example:

```less
@list: apple, pear, coconut, orange;
value: extract(@list, 3);
```

Output:

```
value: coconut;
```
