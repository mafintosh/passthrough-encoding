# passthrough-encoding

An encoder that encodes buffers/strings to a buffer and is [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible

```
npm install passthrough-encoding
```

[![abstract-encoding](https://img.shields.io/badge/abstract--encoding-compliant-brightgreen.svg?style=flat)](https://github.com/mafintosh/abstract-encoding)
[![build status](https://travis-ci.org/mafintosh/passthrough-encoding.svg?branch=master)](https://travis-ci.org/mafintosh/passthrough-encoding)

## Usage

``` js
var enc = require('passthrough-encoding')

console.log(enc.encode(Buffer('hello'))) // prints Buffer('hello')
console.log(enc.encode('hello')) // prints Buffer('hello')
```

## API

See [mafintosh/abstract-encoding](https://github.com/mafintosh/abstract-encoding#api)

## License

MIT
