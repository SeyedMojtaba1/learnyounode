const http = require('http')
const process = require('process')

http.get(`${process.argv[2]}`, (res) => {
    res.on('data', (data) => {
        console.log(data.toString())
    })
    res.on('error', (err) => {
        console.error(err)
    })
}).on('error', (err) => {
    console.error(err)
})
