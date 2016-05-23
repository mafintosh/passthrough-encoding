exports.encode = function (value, buf, offset) {
  if (typeof value === 'string') value = Buffer(value)
  exports.encode.bytes = value.length
  if (!buf) return value
  if (!offset) offset = 0
  value.copy(buf, offset)
  return buf
}

exports.decode = function (buf, offset, end) {
  exports.decode.bytes = (end || buf.length) - (offset || 0)
  if (offset || end) return buf.slice(offset, end || buf.length)
  return buf
}

exports.encodingLength = function (buf) {
  if (typeof buf === 'string') return Buffer.byteLength(buf)
  return buf.length
}
