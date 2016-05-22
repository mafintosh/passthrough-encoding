# noop-encoding

An encoder that encodes buffers/strings to a buffer and is [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible

```
npm install noop-encoding
```

## Usage

``` js
var enc = require('noop-encoding')

console.log(enc.encode(Buffer('hello'))) // prints Buffer('hello')
console.log(enc.encode('hello')) // prints Buffer('hello')
```

## API

See [mafintosh/abstract-encoding](https://github.com/mafintosh/abstract-encoding#api)

## License

MIT
