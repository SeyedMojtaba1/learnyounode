const mymodule = require('./mymodule')

mymodule(`${process.argv[2]}`, `${process.argv[3]}`, function handle(err, data){
    if(err)
        {
            return console.error(err)
        }
    
    data.forEach(file => {
        console.log(file)
    })
})
