const fs = require('fs')
const process = require('process')

module.exports = function filterDirFiles (dirName, fileEx, callbackFunc) {
    fs.readdir(`${dirName}`, (err, data) => {
        if(err)
            callbackFunc(err)
        else
            {
                data.toString().split(',').filter((name) => {
                    if(name.includes(`.${fileEx}`))
                        callbackFunc(null, name)
                })
            }
    })
}