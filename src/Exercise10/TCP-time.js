const net = require('net')
const process = require('process')

const server = net.createServer((socket) => {
    var date = new Date()
    var data = (`${Number(date.getFullYear())}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + (date.getDate())).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`) 
    socket.write(data)
    socket.end()
})
server.listen(process.argv[2])
