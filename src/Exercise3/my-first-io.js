const fs = require('fs')
const process = require('process')

const buf = fs.readFileSync(`${process.argv[2]}`).toString()
const count = (buf.split('\n').length) - 1

console.log(count)
