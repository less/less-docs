{{#todo}}
Refactor this or get rid of it. It's not really related to LESS proper, it's more suitable for a tutorial or blog post.
{{/todo}}

Using LESS.js can maximize the potential of CSS grid frameworks like 960grid, Blue Print, and OOCSS.

##960grid in LESS.js

The following is 960grid framework rewritten as LESS.js:

```less
// Grid Constants
// ============================
@gridMargin 		: 10px;
@totalMargin 		: @gridMargin * 2;
@colWidth 		: 40px;
@gridWidth 		: 960px;

/* Containers */
.container_24 {
	margin-left: auto;
	margin-right: auto;
	width: @gridWidth;
}

/* instead of grid_1, grid_2, etc. */
.grid960 (@gridNum) {
	width: (@colWidth * @gridNum) - @totalMargin;
	display:inline;
	float: left;
	position: relative;
	margin-left: @gridMargin;
	margin-right: @gridMargin;
}

/* instead of prefix_1, prefix_2, etc. */
.prefix960 (@gridNum) {
	padding-left:@colWidth * @gridNum;
}

/* instead of suffix_1, suffix_2, etc. */
.suffix960 (@gridNum) {
	padding-right: @colWidth * @gridNum;
}

/* instead of push_1, push_2, etc. */
.push960 (@gridNum) {
	left: (@colWidth * @gridNum);
}

/* instead of pull_1, pull_2, etc. */
.pull960 (@gridNum) {
	@thisCol : @colWidth * @gridNum;
	left : ( (@thisCol) - ( (@thisCol) * 2) );
}

.alpha {
	margin-left: 0;
}

.omega {
	margin-right: 0;
}
/* http://sonspring.com/journal/clearing-floats */
.clear {
	clear: both;
	display: block;
	overflow: hidden;
	visibility: hidden;
	width: 0;
	height: 0;
}
.clearfix {
	display: inline-block;
	*display : inline;
	zoom : 1;
	&:after {
		clear: both;
		content: ' ';
		display: block;
		font-size: 0;
		line-height: 0;
		visibility: hidden;
		width: 0;
		height: 0;
	}
}
```
## Applying grid styling to elements
Applying the styling to HTML elements is simple.

```css

#Wrapper {
	.container_24;
	.clearfix;
}

#Page {
	.grid960(19);
	.push960(5);
}

#Sidebar{
	.grid960(5);
	.pull960(19);
}
#Footer {
	.container_24;
	//create 6 equal columns
	> .section {
		.grid960(4);
		.alpha;
	}
}
```
