---
title: Developing Less
---

Thanks for thinking about contributing! Please read the [contributing instructions]({{ less.master.url }}CONTRIBUTING.md) carefully to avoid wasted work.

## Install These Tools

To develop Less.js locally, you’ll need **Node.js** and **pnpm**.

### 1. Install Node.js
Download and install the latest LTS release from [nodejs.org](https://nodejs.org/en/download).  

Verify that Node.js is on your path:
```bash
node -v
# Example: v20.10.0
```

### 2. Install pnpm
Less.js uses [pnpm](https://pnpm.io/) for dependency management.  

If `pnpm` isn’t installed yet, add it globally:
```bash
npm install -g pnpm
```

Verify:
```bash
pnpm -v
# Example: 9.6.0
```

> **Note:** pnpm requires Node.js. Installing Node also provides npm, but Less.js uses pnpm for its workspace efficiency and deterministic installs.

### 3. Clone and Install Dependencies
Clone your local copy of the repository and install dependencies:
```bash
git clone https://github.com/less/less.js.git
cd less.js
pnpm install
```

> The first `pnpm install` may take longer as pnpm builds its global content-addressable store.

### 4. Verify Setup
If you start your command line and type:
```bash
node -v
pnpm -v
```
you should see both version numbers.  
If you see “command not found,” check your PATH or reinstall the tools.

> **Tip:** If you encounter errors like `Command not found: grunt`, run tasks through  
> `pnpm run grunt -- <task>` or install the CLI globally:
> ```bash
> pnpm add -g grunt-cli
> ```

## Usage

Grunt is used for builds, tests, benchmarks, and helper tasks. Run tasks with:
```bash
pnpm run grunt -- <task>
```
(or `grunt <task>` if `grunt-cli` is installed globally).

A common shortcut:
```bash
pnpm test
```
is an alias for `pnpm run grunt -- test`.

### Useful Tasks and What They Do

- `pnpm run grunt -- test`  
  Runs the full test suite (lint, node/browser builds, shell option tests, plugin tests, starts the server, and runs browser tests).
- `pnpm run grunt -- dist`  
  Builds distributables (runs `shell:build`).
- `pnpm run grunt -- browsertest`  
  Builds the browser bundle, starts a local server, and runs the browser test runner (uses Sauce Labs locally or Phantom depending on env).
- `pnpm run grunt -- browsertest-server`  
  Builds browser bundle + generates browser test pages and starts a keepalive server so you can open test runner pages manually.  
  Open the test pages at: [http://localhost:8081/tmp/browser/](http://localhost:8081/tmp/browser/)
- `pnpm run grunt -- benchmark`  
  Runs performance benchmarks.
- `pnpm run grunt -- shell-options`  
  Runs the shell options matrix tests (includes deprecated options).
- `pnpm run grunt -- shell-plugin`  
  Runs plugin-related shell tests.
- `pnpm run grunt -- quicktest`  
  Quickly builds CommonJS and runs Node tests.

## Debugging Browser Tests Locally

1. Build the browser bundle and generate test pages:
   ```bash
   pnpm run grunt -- browsertest-lessjs
   pnpm run grunt -- shell:generatebrowser
   ```
   or simply:
   ```bash
   pnpm run grunt -- browsertest-server
   ```
   which builds, generates pages, and starts a keepalive server.

2. Open the runner pages in your browser:
   ```
   http://localhost:8081/tmp/browser/
   ```

If you need to keep the server running and interactively debug tests, use `connect::keepalive` via the `browsertest-server` task.

## How to Run Less in Other Environments

If you look in the libs folder you will see `less`, `less-node`, `less-browser`. The `less` folder is pure javascript with no environment specifics. if you require `less/libs/less`, you get a function that takes an environment object and an array of file managers. The file managers are the same file managers that can also be written as a plugin.

```js
var createLess = require("less/libs/less"),
    myLess = createLess(environment, [myFileManager]);
```

The environment api is specified in [packages/less/src/less/environment/environment-api.ts](https://github.com/less/less.js/blob/master/packages/less/src/less/environment/environment-api.ts)
and the file manager api is specified in [packages/less/src/less/environment/file-manager-api.ts](https://github.com/less/less.js/blob/master/packages/less/src/less/environment/file-manager-api.ts).

For file managers we highly recommend setting the prototype as a new AbstractFileManager - this allows you to override what is needed and allows us to implement new functions without breaking existing file managers. For an example of file managers, see the 2 node implementations, the browser implementation or the npm import plugin implementation.
