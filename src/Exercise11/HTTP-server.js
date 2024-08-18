const http = require('http')
const process = require('process')
const fs = require('fs')

const server = http.createServer((request, response) => {
    response.writeHead(200, {'content-type':'text/plain'})
    
    const readStream = fs.createReadStream(process.argv[3])

    readStream.pipe(response)
})

server.listen(process.argv[2])