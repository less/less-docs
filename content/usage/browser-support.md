---
title: Browser support
---

Less only supports running on modern browsers (recent versions of Chrome, Firefox, Safari and IE). We do not want to encourage client-side usage in production - this is because it adds a performance degradation for the user, who will see a delay (even if it is sub 1 second) while Less styles are compiled to CSS, and may cause cosmetic issues if Javascript errors occur.

Note that PhantomJS does not currently implement `Function.prototype.bind` so you will require a es-5 shim for this function to run under PhantomJS (We use PhantomJS for tests and we append an es5-shim to make it work).

There are reasons to use client-side less in production, such as if you want to allow users to tweak variables which will affect the theme and you want to show it to them in real-time - in this instance a user is not worried about waiting for a style to update before seeing it.

If you need to run less in an older browser, please use an [es-5 shim](https://github.com/kriskowal/es5-shim) which will add the javascript features that less requires.
