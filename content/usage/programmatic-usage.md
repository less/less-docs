---
title: Programmatic usage
---

The main entry point into less is the less.render function. This takes the following format

```
less.render(lessInput, options)
    .then(function(output) {
        // output.css = string of css
        // output.map = string of sourcemap
        // output.imports = array of string filenames of the imports referenced
    },
    function(error) {
    });

// or...

less.render(css, options, function(error, output) {})
```

The options argument is optional. If you specify a callback then a promise will not be returned, where as if you do not specify a callback a promise will be given.
Under the hood, if a callback is given it runs itself again to get a promise and then calls the callback in the 2 promise states - so we recommend using the promise version.

The `sourceMap` option is an object which enables you to set sub sourcemap options. Available sub options are: `sourceMapURL`,`sourceMapBasepath`,`sourceMapRootpath`,`outputSourceFiles` and `sourceMapFileInline`.

```
less.render(lessInput)
    .then(function(output) {
        // output.css = string of css
        // output.map = undefined
}
//,
less.render(lessInput)
    .then(function(output,{sourceMap:{}}) {
        // output.css = string of css
        // output.map = string of sourcemap
}
//or,
less.render(lessInput)
    .then(function(output,{sourceMap: { sourceMapFileInline: true}}) {
        // output.css = string of css \n /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJ..= */
        // output.map = undefined 
}
```
    
Previously we also recommended creating a less.Parser and then calling toCSS on the result. However this had 2 serious drawbacks - it meant that our parser was in fact tied to all of less and 2nd it meant that the toCSS call had to be synchronous.

You can still get the less parse tree, but it requires more steps. You can see how this is done [in the render function](https://github.com/less/less.js/blob/master/lib/less/render.js) but we *do not* support using less in this way and may change this function in a minor release version bump (we will not break it in a patch release).

### Getting access to the log

You can add a log listener with the following code

```
less.logger.addListener({
    debug: function(msg) {
    },
    info: function(msg) {
    },
    warn: function(msg) {
    },
    error: function(msg) {
    }
});
```

Note: all functions are optional. An error will not be logged, but instead is passed back to the callback or promise in less.render
