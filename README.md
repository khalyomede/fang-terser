# fang-starter-plugin

Compress Javascript files using Terser.

[![npm](https://img.shields.io/npm/v/@fang/terser)](https://www.npmjs.com/package/@fang/terser) ![NPM](https://img.shields.io/npm/l/@fang/terser) [![npm peer dependency version](https://img.shields.io/npm/dependency-version/@fang/terser/peer/@fang/core)](https://npmjs.com/package/@fang/core) ![Libraries.io dependency status for latest release](https://img.shields.io/librariesio/release/npm/@fang/terser) ![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@fang/terser)

## Summary

- [About](#about)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Examples](#examples)
- [Changelog](CHANGELOG.md)

## About

I created this plugin to be able to compress Javascript files. Terser is the most popular and currently maintained Javascript compression tool, and I wanted fang to have an official plugin for it.

## Features

- Compress Javascript files using [Terser](https://npmjs.com/package/terser).
- Support all the [Terser options](https://www.npmjs.com/package/terser#minify-options-structure).

## Requirements

Having [@fang/core](https://npmjs.com/package/@fang/core) installed on version `0.*`.

## Installation

- Using NPM: `npm install --save-dev @fang/terser`
- Using Yarn: `yarn add --dev @fang/terser`

## Examples

- [1. Compress a Javascript file](1-transpile-and-build-files)
- [2. Customize how Terser compress your file](2-customize-how-terser-compress-your-file)

### 1. Compress a Javascript file

This example assumes you have a `example/code.js` file containing your code, and you want to output a compressed code in `example/dist/js/code.js`.

```javascript
// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const terser = require("@fang/terser");

const js = {
  name: "Javascript",
  input: "example/code.js",
  tasks: [
    terser(),
    save({
      folder: "example/dist/js",
    }),
  ],
};

const main = async () => await run([js]);

main();
```

Run your script, and you should see something like this in the console.

```bash
$ node script.js
fang: start
8 CPUs core(s)
1 tasks to run
Javascript: start
Javascript: 30.604ms
fang: 183.533ms
```

### 2. Customize how Terser compress your file

This examples assumes you havbe a `example/code.js` file containing your code, and your want to output a compressed code in `example/dist/js/code.js`.

```javascript
// script.js
const { run } = require("@fang/core");
const save = require("@fang/save");
const terser = require("../lib");

const js = {
  name: "Javascript",
  input: "example/code.js",
  tasks: [
    terser({
      compress: {
        passes: 5,
        unsafe: true,
        pure_getters: true,
      },
      toplevel: true,
    }),
    save({
      folder: "example/dist/js",
    }),
  ],
};

const main = async () => await run([js]);

main();
```

Run `node script.js`, and you should see something like this in your console.

```bash
$ node script.js
fang: start
8 CPUs core(s)
1 tasks to run
Javascript: start
Javascript: 37.211ms
fang: 168.672ms
```
