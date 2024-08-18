const http = require('http')
const process = require('process')
const map = require('through2-map')

const server = http.createServer((request, response) => {
    if(request.method === 'POST')
    {
        request.pipe(map((chunk) => {
            return chunk.toString().toUpperCase()
        })).pipe(response)
    }else{
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Only POST requests are accepted');
    }
})

server.listen(process.argv[2])
