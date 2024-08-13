const http = require('http')
const concatstream = require('concat-stream')
const process = require('process')

http.get(`${process.argv[2]}`, (res) => {
    res.pipe(concatstream((data) => {
        console.log(data.toString().length)
        console.log(data.toString())
    }))
})