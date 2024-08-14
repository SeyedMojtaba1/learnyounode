const http = require('http')
const process = require('process')
const concatstream = require('concat-stream')

let urls = [`${process.argv[2]}`, `${process.argv[3]}`, `${process.argv[4]}`]
let result = []
let counter = Number(0)

urls.forEach((url, index) => {
    http.get(url, (res) => {
        let data = ""
        res.on('data', chunk => {
            data += chunk
        })

        let complete = ""
        res.on('end', () => {
            data.split("\n").forEach(res => {
                complete += res
            })
            result[index] = complete
            ++counter
        
            if(counter == 3){
                console.log(result[0])
                console.log(result[1])
                console.log(result[2])
            }
        })

    }).on('error', err => console.error)
})

// http.get(urls[0], res => {
//     res.setEncoding('utf-8')
//     res.on('data', data => {
//         console.log(data)
//     })
// })