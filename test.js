var tape = require('tape')
var enc = require('./')

tape('encodes byte value', function (t) {
  t.same(enc.encode(Buffer('hi')), Buffer('hi'))
  t.same(enc.encode('hi'), Buffer('hi'))
  t.end()
})

tape('copies value to target', function (t) {
  t.same(enc.encode(Buffer('hi'), Buffer('hello')), Buffer('hillo'))
  t.same(enc.encode(Buffer('hi'), Buffer('hello'), 1), Buffer('hhilo'))
  t.end()
})

tape('decodes', function (t) {
  t.same(enc.decode(enc.encode(Buffer('hi'))), Buffer('hi'))
  t.same(enc.decode(enc.encode('hi')), Buffer('hi'))
  t.end()
})

tape('decodes with offset', function (t) {
  t.same(enc.decode(Buffer('hillo'), 0, 2), Buffer('hi'))
  t.same(enc.decode(Buffer('hhilo'), 1, 3), Buffer('hi'))
  t.end()
})
