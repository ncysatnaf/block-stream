process.stdin.on('readable', () => {
  const buf = process.stdin.read()
  console.dir(buf)
})