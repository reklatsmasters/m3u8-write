'use strict'

const test = require('tape')
const m3u = require('./')

test('empty key', function (t) {
  const expected = "#EXTM3U\n#EXT-X-STATUS"
  t.equal(m3u([{status:void 0}]), expected)
  t.end()
})

test('numbers', function (t) {
  const expected = "#EXTM3U\n#EXT-X-STATUS:123"
  t.equal(m3u([{status:123}]), expected)
  t.end()
})

test('key, started with EXT', function (t) {
  const expected = "#EXTM3U\n#EXTSTATUS:13"
  t.equal(m3u([{extstatus: 13}]), expected)
  t.end()
})

test('objects', function (t) {
  const expected = `#EXTM3U\n#EXT-X-LIST:PARAM=1,PARAM2=XYZ,PARAM3="value"`
  t.equal(m3u([ {list: {
    param:1,
    param2: "XYZ",
    param3: "value"
  }} ]), expected)
  t.end()
})


test('excludes keys "RESOLUTION" and "FRAME_RATE"', function (t) {
  const expected = `#EXTM3U\n#EXT-X-LIST:RESOLUTION=1920x1080,FRAME_RATE=30.000,PARAM3="value"`
  t.equal(m3u([ {list: {
    resolution:"1920x1080",
    frame_rate: "30.000",
    param3: "value"
  }} ]), expected)
  t.end()
})