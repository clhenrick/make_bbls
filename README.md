# make_bbls
A Node JS Module for making valid BBL numbers from separate NYC borough, block and lot values.

**Code Credit:** Iteration on [code](https://github.com/aepyornis/DOB-Jobs/blob/master/postgres_parser/parse.js#L157-L195) by [@aepyornis](https://github.com/aepyornis)

## Installation
Make sure you have Node.js installed and then do `npm install make_bbls`

## Usage
The `bbl` function takes values as either strings or numbers. Passing a fourth value of `true` will return the BBL as an integer.

```
var bbl = require('make_bbls').bbl;
console.log(bbl('Manhattan', 4, 321));
// will output: '1000040321'
console.log(bbl('Manhattan', 4, 321, true));
// will output: 1000040321
```

## Tests
Do `npm test`