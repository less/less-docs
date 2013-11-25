Less only supports running on modern browsers (modern versions of chrome, firefox and IE10). We do not want to encourage people to use Less client side in production - this is because it adds a performance degradation for the user, who gets a pause (even if it is sub 1 second) while the less is compiled to css.

There are reasons to use less browser side in production, such as if you want to allow someone to tweak variables which will effect the theme and you want to show it to them in real-time - in this instance a user is not worried about waiting for a style to update before seeing it.

If you need to run less in an older browser, please use an [es-5 shim](https://github.com/kriskowal/es5-shim) which will shim in the functions that less requires.