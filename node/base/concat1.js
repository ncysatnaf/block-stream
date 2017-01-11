const concat = require('concat-stream')

const cs = concat(body => {
  console.log(body.toUpperCase())
})

cs.write('beep ')
cs.write('boop.')
cs.end()