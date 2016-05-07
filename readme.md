# m3u8-write
[![travis](https://travis-ci.org/ReklatsMasters/m3u8-write.svg)](https://travis-ci.org/ReklatsMasters/m3u8-write)
[![npm](https://img.shields.io/npm/v/m3u8-write.svg)](https://npmjs.org/package/m3u8-write)
[![license](https://img.shields.io/npm/l/m3u8-write.svg)](https://npmjs.org/package/m3u8-write)
[![downloads](https://img.shields.io/npm/dm/m3u8-write.svg)](https://npmjs.org/package/m3u8-write)

## Example

#### input
```json
[
  { "MEDIA": { 
      "TYPE": "VIDEO",
      "GROUP-ID": "chunked",
      "NAME": "Source",
      "AUTOSELECT": "YES",
      "DEFAULT": "YES" 
    }
  },
  "http://1.example.com/index.m3u8",
  { "PLAYLIST-TYPE": "VOD" },
  { "EXTINF": "10" }
]
```

#### output
```
#EXTM3U
#EXT-X-MEDIA:TYPE=VIDEO,GROUP-ID="chunked",NAME="Source",AUTOSELECT=YES,DEFAULT=YES
http://1.example.com/index.m3u8
#EXT-X-PLAYLIST-TYPE:VOD
#EXTINF:10
```

## Usage
```js
const m3u = require('m3u8-write')

console.log(m3u([
  { "EXTINF": 4 },
  "http://1.example.com/index.m3u8"
]))
```

## License
MIT, 2016 (c) Dmitry Tsvettsikh