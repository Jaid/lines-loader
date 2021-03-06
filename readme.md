# lines-loader


<a href="https://raw.githubusercontent.com/jaid/lines-loader/master/license.txt"><img src="https://img.shields.io/github/license/jaid/lines-loader?style=flat-square" alt="License"/></a> <a href="https://github.com/sponsors/jaid"><img src="https://img.shields.io/badge/<3-Sponsor-FF45F1?style=flat-square" alt="Sponsor lines-loader"/></a>
<a href="https://actions-badge.atrox.dev/jaid/lines-loader/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2Fjaid%2Flines-loader%2Fbadge" alt="Build status"/></a> <a href="https://github.com/jaid/lines-loader/commits"><img src="https://img.shields.io/github/commits-since/jaid/lines-loader/v2.0.1?style=flat-square&logo=github" alt="Commits since v2.0.1"/></a> <a href="https://github.com/jaid/lines-loader/commits"><img src="https://img.shields.io/github/last-commit/jaid/lines-loader?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/jaid/lines-loader/issues"><img src="https://img.shields.io/github/issues/jaid/lines-loader?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/lines-loader"><img src="https://img.shields.io/npm/v/lines-loader?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/jaid/lines-loader/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/lines-loader?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/lines-loader"><img src="https://img.shields.io/npm/dm/lines-loader?style=flat-square&logo=npm" alt="Downloads"/></a>

**Webpack loader that loads a text file as an array of its lines.**









## Usage

Add the loader to your Webpack config:

`webpack.config.js`
```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.lines\.txt$/,
        use: "lines-loader"
      }
    ]
  }
}
```

Now you can import corresponding files in your entry script:

`index.js`
```javascript
import lines from "./example.lines.txt"

console.log(lines.length)
```

`example.lines.txt`
```text
maxine
chloe
rachel
```

Variable `lines` in `index.js` will look like this:
```javascript
["maxine", "chloe", "rachel"]
```

## Advanced Usage

All options can be set inline. Example:

`index.js`
```javascript
import lines from "./example.lines.txt?nonEmpty=false"
import linesNormalized from "./example.lines.txt?sort&unique"

console.log(lines.length)
console.log(linesNormalized.length)
```

`example.lines.txt`
```text
maxine
chloe

rachel


chloe

```

Variable `lines` in `index.js` will look like this:
```javascript
["maxine", "chloe", "", "rachel", "", "", "chloe", ""]
```

Variable `linesNormalized` in `index.js` will look like this:
```javascript
["chloe", "maxine", "rachel"]
```

## Options

Option|Default|Description
---|---|---
nonEmpty|`true`|If `true`, empty lines will be skipped. If option `trim` is `true`, any lines that only contain whitespace will be also skipped.
randomPick|`false`|If `true`, the exported value will be a function instead of a `string[]`. That function does not take any arguments an returns a random pick from the extracted lines.
sort|`false`|If `true`, extracted lines will be sorted alphabetically.
trim|`true`|If `true`, extracted lines' left and right whitespace will be trimmed.
unique|`false`|If `true`, there will not be any duplicates in extracted lines.

All options can be overwritten in any asset import by appending a query string.

## Installation
<a href="https://npmjs.com/package/lines-loader"><img src="https://img.shields.io/badge/npm-lines--loader-C23039?style=flat-square&logo=npm" alt="lines-loader on npm"/></a>
```bash
npm install --save-dev lines-loader@^2.0.1
```
<a href="https://yarnpkg.com/package/lines-loader"><img src="https://img.shields.io/badge/Yarn-lines--loader-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="lines-loader on Yarn"/></a>
```bash
yarn add --dev lines-loader@^2.0.1
```







## Development



Setting up:
```bash
git clone git@github.com:jaid/lines-loader.git
cd lines-loader
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
