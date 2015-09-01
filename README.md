# excerpt-at-line-col
Get text excerpt that points to a given line and column number

# Example
a.txt
```txt
one
two
three
four
five
```
Some JS code
```js
var excerptAtLineCol = require("excerpt-at-line-col");

var text = require("fs").readFileSync("./a.txt").toString();

console.log(excerptAtLineCol(text, 2, 2, 1));
```
Here's the output
```txt
two
three
  ^
four
```

# API
### excerptAtLineCol(text, line\_n, col\_n, n\_surrounding\_lines)
 * `text` - is the text you want to extract an excerpt from
 * `line_n` -  the line number, starting at 0
 * `col_n` - the column number, starting at 0
 * `n_surrounding_lines` - the number of surrounding lines you want it to show. Defaulting to 0, i.e. matching line only.

Returns the excerpt string

# License

The MIT License (MIT)

Copyright (c) 2015 Small Helm LLC

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
