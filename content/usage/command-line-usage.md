---
title: Command Line Usage
---

> Compile `.less` files to `.css` using the command line

<span class="warning">Heads up! If the command line isn't your thing, learn more about [GUIs for Less](../tools/#guis-for-less).</span>

## Installing

Install with [npm](https://www.npmjs.org/)

```bash
npm install less -g
```

The `-g` option installs the `lessc` command available globally. For a specific version (or tag) you can add `@VERSION` after our package name, e.g. `npm install less@2.7.1 -g`.

### Installing for Node Development

Alternatively, if you don't want to use the compiler globally, you may be after

```bash
npm i less --save-dev
```

This will install the latest official version of lessc in your project folder, also adding it to the `devDependencies` in your project's `package.json`.

### Beta releases of lessc

Periodically, as new functionality is being developed, lessc builds will be published to npm, tagged as beta. These builds will _not_ be published as a `@latest` official release, and will typically have beta in the version (use `lessc -v` to get current version).

Since patch releases are non-breaking we will publish patch releases immediately and alpha/beta/candidate versions will be published as minor or major version upgrades (we endeavour since 1.4.0 to follow [semantic versioning](http://semver.org/)).


## Server-Side and Command Line Usage

The binary included in this repository, `bin/lessc` works with [Node.js](http://nodejs.org/) on *nix, OS X and Windows.

**Usage**: `lessc [option option=parameter ...] <source> [destination]`

### Command Line Usage

```bash
lessc [option option=parameter ...] <source> [destination]
```

If source is set to `-' (dash or hyphen-minus), input is read from stdin.

#### Examples

Compile bootstrap.less to bootstrap.css

```bash 
lessc bootstrap.less bootstrap.css
```

## Options specific to `lessc`

_For all other options, see [Less Options](#less-options)._

#### Silent

lessc -s
lessc --silent

Stops any warnings from being shown.

#### Version

```bash
lessc -v
lessc --version
```
#### Help

| | |
|---|---|
| `lessc --help` | |
| `lessc -h` | |

Prints a help message with available options and exits.

#### Makefile

```bash
lessc -M
lessc --depends
```

Outputs a makefile import dependency list to stdout.

#### No Color

*Deprecated*.

```bash
lessc --no-color
```

#### Clean CSS

In v2 of less, Clean CSS is no longer included as a direct dependency. To use clean css with lessc, use the [clean css plugin](https://github.com/less/less-plugin-clean-css).


