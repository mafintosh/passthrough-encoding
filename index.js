exports.encode = function (value, buf, offset) {
  if (typeof value === 'string') value = Buffer(value)
  if (!buf) return value
  if (!offset) offset = 0
  value.copy(buf, offset)
  return buf
}

exports.decode = function (buf, offset, end) {
  if (offset || end) return buf.slice(offset, end || buf.length)
  return buf
}

exports.encodingLength = function (buf) {
  if (typeof buf === 'string') return Buffer.byteLength(buf)
  return buf.length
}
