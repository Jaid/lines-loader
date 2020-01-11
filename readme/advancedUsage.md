All options can be set inline. Example:

`index.js`
```javascript
import lines from "./example.lines.txt"
import linesNormalized from "./example.lines.txt?sorted&unique&nonEmpty"

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