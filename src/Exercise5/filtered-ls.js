const fs = require('fs')
const process = require('process')

fs.readdir(`${process.argv[2]}`, (err, data) => {
    if(err){
        console.error(err)
    }
    else{
        data.toString().split(',').filter((name) => {
            if(name.includes(`.${process.argv[3]}`))
                console.log(name)
        })
    }
})
