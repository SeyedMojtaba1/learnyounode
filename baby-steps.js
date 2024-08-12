var process = require('process');

function add() {
    let sum = Number(0);
    for(let i = 2; process.argv[i] != null ; i++){
        sum = sum + Number(process.argv[i])
    }
    console.log(sum)
}

add()