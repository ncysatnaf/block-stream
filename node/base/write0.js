const Writable = require('stream').Writable
const ws = Writable()

ws._write = (chunk, enc, next) => {
  console.log(chunk)
  next()
}

process.stdin.pipe(ws)