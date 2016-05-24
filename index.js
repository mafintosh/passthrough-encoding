exports.encode = function (value, buf, offset) {
  if (!value) value = Buffer(0)
  if (typeof value === 'string') value = Buffer(value)

  exports.encode.bytes = value.length

  if (!buf) return value
  if (!offset) offset = 0
  if (value.length) value.copy(buf, offset)

  return buf
}

exports.encode.bytes = 0

exports.decode = function (buf, offset, end) {
  exports.decode.bytes = (end || buf.length) - (offset || 0)
  if (offset || end) return buf.slice(offset, end || buf.length)
  return buf
}

exports.decode.bytes = 0

exports.encodingLength = function (buf) {
  if (!buf) return 0
  if (typeof buf === 'string') return Buffer.byteLength(buf)
  return buf.length
}
