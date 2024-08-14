const fs = require('fs')
const process = require('process')

let files = []
module.exports = function filterDirFiles (dirName, fileEx, callbackFunc) {
    fs.readdir(`${dirName}`, (err, data) => {
        if(err)
            return callbackFunc(err, null)
        else
            {
                data.toString().split(',').filter((name) => {
                    if(name.endsWith(`.${process.argv[3]}`)){
                        files.push(name)
                    }
                })
                return callbackFunc(null, files)
            }
    })
}