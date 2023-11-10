const fs = require('fs')
const process = require('process')
const axios = require('axios')

function output(txt, out) {
    if(out){
        fs.writeFile(out, txt, 'utf8', function (err){
            if (err){
                console.log(err);
                process.exit(1);
            }
        });
    } else {
        console.log(txt);

    } 
}


function cat (path, out) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        else{
            output(data, out);
        }
    })
}


async function webCat(url, out){
    try {
        let res = await axios.get(url);
        output(res.data, out);
    } catch(err){
        console.log(err);
        process.exit(1);
    }
}

let path;
let out;

if (process.argv[2] === '--out'){
    out = process.argv[3]
    path = process.argv[4]
}
else{
    path = process.argv[2]
}

if (path.slice(0,4) ==='http'){
    webCat(path);
} else{
    cat(path);
}
