const http = require('http')
const qs = require('querystring')
const concat = require('concat-stream')

const server = http.createServer((req, res) => {
  req.pipe(concat(body => {
    const params = qs.parse(body.toString())
    res.end(JSON.stringify(params) + '\n')
  }))
})

server.listen(2333)