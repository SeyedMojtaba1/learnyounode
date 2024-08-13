const fs = require('fs')
const process = require('process')

fs.readFile(`${process.argv[2]}`, (err, data) => {
    const count = data.toString().split('\n').length - 1
    console.log(count)
})
