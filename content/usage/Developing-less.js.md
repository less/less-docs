## Install these tools

* **cygwin** (ensure make is selected) - <http://cygwin.com/install.html>
* **node** - <http://nodejs.org/>
* **phantomjs** - <http://phantomjs.org/download.html>

make sure the paths are setup. If you startup cygwin and type `node -v` you should see the node compiler. If you run `phantomjs -v` you should see the phantomjs version number.

* clone your less.js repository locally
* navigate to your local less.js repository and run `npm install` this installs less' npm dependencies.
* run `npm -g install uglify-js` if you want to do builds. This needs to be done so that uglify-js is available globally.

## usage

If you go to the root of the less repository you should be able to do `make test` - this should run the tests. `make browser-test` should run the browser tests. If you want to try out the currrent version of less against a file, from here do `node bin/lessc path/to/file.less`

To debug the browser tests, run `make browser-test-server` then go to http://localhost:8081/browser/test-runner-main.htm or one of the other test runner pages created in `{path-to-less.js-repository}/test/browser/`

Optional: To get the current version of the less compiler do `npm -g install less` - npm is the node package manager and "-g" installs it to be available globally.

You should now be able to do `lessc file.less` and if there is an appropriate file.less then it will be compiled and output in the current directory.