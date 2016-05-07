'use strict'

module.exports = m3u

const isString = s => typeof s === 'string'
const isObject = o => o && typeof o === 'object'

function m3u(obj) {
  if (!Array.isArray(obj)) {
    throw new TypeError('expected array of objects')
  }

  const playlist = ["#EXTM3U"]

  for(const row of obj) {
    if (isString(row)) {
      playlist.push(row)
    } else if (isObject(row)) {
      playlist.push(formatObj(row))
    }
  }

  return playlist.join('\n')
}

function formatObj(obj) {
  const keys = Object.keys(obj)

  if (keys.length > 1) {
    throw new Error('more than 1 key per row object')
  }

  if (!keys.length) {
    return ""
  }

  const value = obj[keys[0]]
  const upkey = keys[0].toUpperCase()
  const key = upkey.startsWith('EXT') ? '#'+upkey : `#EXT-X-${upkey}`

  if (typeof value === 'undefined') {
    return key
  } else if (isString(value) || typeof value === 'number') {
    return key + ':' + value
  } else {
    return key + ":" + formatChildObj(value)
  }
}

function formatValue(s) {
  return RegExp.prototype.test.call(/^[A-Z\d]+$/, s) ? s : `"${s}"`
}

function formatChildObj(o) {
  return Object.keys(o).map(key => key.toUpperCase() + '=' + formatValue(o[key])).join(',')
}
