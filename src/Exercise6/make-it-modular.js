const mymodule = require('./mymodule')

mymodule(`${process.argv[2]}`, `${process.argv[3]}`, callbackFunc)

function callbackFunc(err, data){
    if(err)
        {
            console.log(err)
        }
    else
        {
            console.log(data)
        }
}