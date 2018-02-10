---
title: Browser Support
---

Less only supports running on modern browsers (recent versions of Chrome, Firefox, Safari and IE/Edge). While it is possible to use Less on the client side in production, please be aware that there are performance implications for doing so (although the latest releases of Less are quite a bit faster). Also, sometimes cosmetic issues can occur if a JavaScript error occurs. This is a trade off of flexibility vs. speed. For the fastest performance possible for a static web site, we recommend compiling Less on the server side.

Note that PhantomJS does not currently implement `Function.prototype.bind` so you will require a es-5 shim for this function to run under PhantomJS (We use PhantomJS for tests and we append an es5-shim to make it work).

There are reasons to use client-side script in production, such as if you want to allow users to tweak variables which will affect the theme and you want to show it to them in real-time - in this instance a user is not worried about waiting for a style to update before seeing it.
