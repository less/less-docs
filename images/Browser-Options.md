# Browser Options

You can set options by setting things on a global LESS object **before** the script:
``` html
<!-- set options before less.js script -->
<script>
  less = {
    env: "development",
    async: false,
    fileAsync: false,
    poll: 1000,
    functions: {},
    dumpLineNumbers: "comments",
    relativeUrls: false,
    rootpath: ":/a.com/"
  };
</script>
<script src="less.js"></script>
```

#### env
Type: `String`
Default: `development`

Environment to run may be either `development` or `production`. If the document's URL starts with file:// or localhost it will automatically be set to 'development'.


#### async
Type: `Boolean`
Default: `false`

Load imports asynchronously.


#### fileAsync
Type: `Boolean`
Default: `false`

Load imports asynchronously when in a page under a file protocol.


#### poll
Type: `Integer`
Default: `1000`

The amount of time (in milliseconds) between polls while in watch mode.


#### functions
Type: `object`

User functions, keyed by name.


#### dumpLineNumbers
Type: `String`
Default: `comments`

Or "mediaQuery" or "all". 

**TODO**: need more explaination here.


#### relativeUrls
Type: `Boolean`
Default: `false`

Optionally adjust URL's to be relative. When false, URL's are already relative to the entry less file.


#### rootpath
Type: `String`
Default: `false`

A path to add on to the start of every URL resource.


## Watch mode
To enable Watch mode, option **env** must be set to `development`. Then AFTER the less.js file is included, call less.watch(), like this:

```html
<script src="less.js"></script>
<script>less.watch()</script>
```

Alternatively you can temporary enable Watch mode by appending `#!watch` to the URL.


## More information
* **Usage**: for an introduction to the language, please visit [lesscss.org](http://lesscss.org). 
* **Developer info**: visit the wiki homepage [wiki](https://github.com/cloudhead/less.js/wiki)