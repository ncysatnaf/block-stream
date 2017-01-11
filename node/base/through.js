const through = require('through')

const write = buf => { 
  console.log(buf) 
}

const end = () => { 
  console.log('__END__')
}

process.stdin.pipe(through(write, end))