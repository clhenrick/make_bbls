# make_bbls
A Node JS Module for making valid BBL numbers from separate NYC borough, block and lot values.

## Installation
Make sure you have Node.js installed and then do `npm install make_bbls`

## Usage
The `bbl` function takes values as either strings or numbers. Passing a fourth value of `true` will return the BBL as an integer.

As a Node JS app:

```
var bbl = require('make_bbls');
console.log(bbl('Manhattan', 4, 321));
// will output: '1000040321'
```

Client Side:

```
var bbls = module.exports.bbl
```

## Tests
Do `npm test`