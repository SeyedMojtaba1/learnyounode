const fs = require('fs')
const process = require('process')

fs.readFile(`${process.argv[2]}`, (err, data) => {
    if(err){
        console.error(err)
    }
    else{
        const count = data.toString().split('\n').length - 1
        console.log(count)
    }
})
