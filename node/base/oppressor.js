const oppressor = require('oppressor')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

  const stream = fs.createReadStream(__dirname + '/data.txt')
  stream.pipe(oppressor(req).pipe(res))
})

server.listen(2333)
