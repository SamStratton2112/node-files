const fs = require('fs')
const process = require('process')

function cat (path) {
    fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(data);
    })
}

cat(process.argv[2]);
// becuase argv is an array and [0] and [1] are paths

