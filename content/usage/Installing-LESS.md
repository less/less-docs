# Installing Less.js

> For general installation instructions, please read the [[Getting Started]] guide. If you need more specific information after having read that, read on.

## Overview
Less.js comprises two parts:

1. The npm module `lessc` should be installed locally to your project. It contains the code and logic for running tasks, loading plugins, etc.
1. The npm module `lessc-cli` should be installed globally. It puts the `lessc` command in your PATH so you can execute it anywhere. By itself, it doesn't do anything; its job is to load and run the lessc that has been installed locally to your project, regardless of its version.

It is preferable to specify lessc and lessc plugins as [devDependencies](https://npmjs.org/doc/json.html#devDependencies) in your project's [package.json](https://npmjs.org/doc/json.html) and instruct users to do `npm install` than to have users install lessc and lessc plugins manually. Utilizing `package.json` makes the task of installing lessc (and any other dev dependencies) much easier and less error-prone.

## Installing lessc
As the "Installing lessc and lessc plugins" section of the [[Getting Started]] guide explains, run `npm install lessc --save-dev` and npm will install the latest official version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that a [tilde version range][] will be automatically specified in `package.json`. This is good, as new patch releases of the latest version will be installable by npm.

[tilde version range]: https://npmjs.org/doc/json.html#Tilde-Version-Ranges

### Installing a specific version of lessc
If you need a specific version of lessc, run `npm install lessc@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that a [tilde version range][] will be automatically specified in `package.json`. This is typically good, as new patch releases of the specified version will be installable by npm. If you don't want this behavior, manually edit your `package.json` and remove the ~ (tilde) from the version number. This will lock in the exact version that you have specified.

### Installing a published development version of lessc
Periodically, as new functionality is being developed, lessc builds will be published to npm. These builds will _not_ be published as a `@latest` official release, and will typically have a build number or alpha/beta/release candidate designation.

Like installing a specific version of lessc, run `npm install lessc@VERSION --save-dev` where `VERSION` is the version you need, and npm will install that version of lessc in your project folder, adding it to your `package.json` devDependencies.

Note that regardless of the version you specify, a [tilde version range][] will be specified in `package.json`. **This is very bad**, as new, possibly incompatible, patch releases of the specified development version may be installed by npm, breaking your build.

_In this case it is **very important** that you manually edit your `package.json` and remove the ~ (tilde) from the version number. This will lock in the exact development version that you have specified._

### Installing an unpublished development version of lessc
If you want to install a bleeding-edge, unpublished version of lessc, follow the instructions for specifying a [git URL as a dependency](https://npmjs.org/doc/json.html#Git-URLs-as-Dependencies) and be sure to specify an actual commit SHA (not a branch name) as the `commit-ish`. This will guarantee that your project always uses that exact version of lessc.

The specified git URL may be that of the official lessc repo or a fork.

## Installing lessc-cli
As the "Installing the CLI" section of the [[Getting Started]] guide explains, run `npm install -g lessc-cli` and npm will install the latest official version of lessc-cli. This will put the `lessc` command in your system path, allowing it to be run from any directory.

**If you have installed lessc globally in the past, you will need to remove it with `npm uninstall -g lessc` first.**

### Installing lessc-cli locally
You may install lessc-cli locally to a project using `npm install lessc-cli --save-dev` but instead of being able to access the `lessc` command from anywhere, you'll need to specify its explicit local path, which will be something like `./node_modules/.bin/lessc`.

Using lessc-cli in this way is unsupported.
