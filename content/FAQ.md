## How do I install LESS?
For general installation instructions, please read the [[Getting Started]] guide. If you need more specific information after having read that, read the comprehensive [[Installing LESS]] guide.


<a name="faq-windows"></a>
## Use LESS on Windows
LESS works fine on Windows, because [Node.js](http://nodejs.org/) and [npm](http://npmjs.org/) both work fine on Windows. Usually the problematic part is [Cygwin](http://www.cygwin.com/), because it bundles an outdated version of Node.js.

The best way to avoid this issue is to use the [msysGit installer](http://msysgit.github.com/) to install the `git` binary and the [Node.js installer](http://nodejs.org/#download) to install the `node` and `npm` binaries, and to use the built-in [Windows command prompt](http://www.cs.princeton.edu/courses/archive/spr05/cos126/cmd-prompt.html) or [PowerShell](http://support.microsoft.com/kb/968929) instead of Cygwin.


<a name="faq-async-complete"></a>
## Why doesn't my asynchronous task complete?
Chances are this is happening because you have forgotten to call the [this.async](LESS.task#wiki-this-async) method to tell LESS that your task is asynchronous. For simplicity's sake, LESS uses a synchronous coding style, which can be switched to asynchronous by calling `this.async()` within the task body.

Note that passing `false` to the `done()` function tells LESS that the task has failed.

For example:

```javascript
LESS.registerTask('asyncme', 'My asynchronous task.', function() {
  var done = this.async();
  doSomethingAsync(done);
});
```
