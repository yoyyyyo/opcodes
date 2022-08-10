# opcodes
[npm](https://npmjs.com/package/opcodes) | [github](https://github.com/yoyyyyo/opcodes)

# usage examples
```js
import op from 'opcodes'; // default is hexstring

const xfer = '0x' + op.PUSH20 + '00'.repeat(20) + op.SELFDESTRUCT;
console.log(xfer) //  0x730000000000000000000000000000000000000000ff
```

```js
// CommonJS
const { PUSH20, SELFDESTRUCT } = require('opcodes');

// or ES modules
import op from 'opcodes'; 
const { PUSH20, SELFDESTRUCT } = op;

const xfer2 = '0x' + PUSH20 + '00'.repeat(20) + SELFDESTRUCT;
console.log(xfer2) // 0x730000000000000000000000000000000000000000ff
```

```js
const { PUSH20, SELFDESTRUCT } = require('opcodes/buffer');

const xfer = Buffer.concat([
    PUSH20,
    Buffer.alloc(20),
    SELFDESTRUCT
]);
console.log('0x' + xfer.toString('hex')) // 0x730000000000000000000000000000000000000000ff
```
