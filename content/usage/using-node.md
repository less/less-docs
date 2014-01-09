# Using less in Node 
## Installing lessc
`npm install less --save-dev` and npm will install the latest official version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that a [tilde version range][] will be automatically specified in `package.json`. This is good, as new patch releases of the latest version will be installable by npm.

[tilde version range]: https://npmjs.org/doc/json.html#Tilde-Version-Ranges

### Installing a specific version of lessc
If you need a specific version of lessc, run `npm install less@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.

### Installing a published development version of lessc
Periodically, as new functionality is being developed, lessc builds will be published to npm. These builds will _not_ be published as a `@latest` official release, and will typically have a build number or alpha/beta/release candidate designation.

Like installing a specific version of lessc, run `npm install lessc@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that regardless of the version you specify, a [tilde version range][] will be specified in `package.json`. **This is very bad**, as new, possibly incompatible, patch releases of the specified development version may be installed by npm, breaking your build.

_In this case it is **very important** that you manually edit your `package.json` and remove the ~ (tilde) from the version number. This will lock in the exact development version that you have specified._

### Installing an unpublished development version of lessc
If you want to install a bleeding-edge, unpublished version of lessc, follow the instructions for specifying a [git URL as a dependency](https://npmjs.org/doc/json.html#Git-URLs-as-Dependencies) and be sure to specify an actual commit SHA (not a branch name) as the `commit-ish`. This will guarantee that your project always uses that exact version of lessc.

The specified git URL may be that of the official lessc repo or a fork.